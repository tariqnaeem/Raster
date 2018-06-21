const API_PATH = process.env.REACT_APP_API_PATH || '';

const API_INGEST_PATH = process.env.API_INGEST_PATH || '';


export const post = (endpoint, payload) => (
  fetch(API_PATH.replace('BASE-URL', 'ub6j66j7yh') + endpoint, { 
        method: 'POST',
        body: JSON.stringify(payload) })
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

export const postIngest = (endpoint, payload) => (
  fetch(API_PATH.replace('BASE-URL', 'kwa7ip68qi') + endpoint, { 
        method: 'POST',
        body: JSON.stringify(payload) })
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





