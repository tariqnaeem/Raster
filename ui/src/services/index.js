import { normalize } from 'normalizr';
import isArray from 'lodash/isArray';
import { QUERY } from '../constants';
import * as schema from '../schema'

const API_PATH = process.env.REACT_APP_API_PATH || '';

export const get = (endpoint) => (
  fetch(API_PATH + endpoint, { method: 'GET', credentials: 'same-origin' })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json().then(json => ({ json, response }))
      } else {
        const error = new Error(response.statusText || response.status);
        error.response = response;
        return Promise.reject(error);
      }
  }).then(({ json }) => json)
);

function callApi (endpoint, schema, payload, options = {}) {
  const fullPath =  API_PATH + endpoint;

  const fetchOptions = Object.assign(
    { method: 'GET', credentials: 'same-origin' },
    payload ? {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    } : {},
    options
  )

  return fetch(fullPath, fetchOptions)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json().then(json => ({ json, response }))
      } else {
        const error = new Error(response.statusText || response.status);
        error.response = response;
        return Promise.reject(error);
      }
    })
    .then(({ json, response}) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      if (schema) {
        // from GUI we only do single actions - but the endpoint can handle bulk actions

        //if (isArray(json)) return json;//return normalize(json, schema);
        //return dataDummy;
        return json;

      } else {
        const { response } = json;

        // from GUI we only do single actions - but the endpoint can handle bulk actions
        if (isArray(response)) return response[0].DATA;

        return response.DATA
      }
    })
    .then(
      response => {
        return { response }
      },
      error => {
        const errorResponse = error.response;
        return ({
          error: (errorResponse) ? `Error: ${errorResponse.url} ${errorResponse.statusText} ${errorResponse.status}` : 'unknown error'
        })}
    )
}

export const getDiscrepancies = (payload) => {
  return callApi('/audit', schema.discrepanciesListSchema, payload, {method: 'POST'})
  //return callApi(`api`, schema.discrepanciesListSchema)
};

export const populateGraph = (payload) => {
  return get('/sql?q='+QUERY.replace("YEAR", payload.year))
};
