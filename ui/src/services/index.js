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

export const post = (endpoint, payload) => (
  fetch(API_PATH + endpoint, { 
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





