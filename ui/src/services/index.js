const API_PATH = process.env.REACT_APP_API_PATH || '';


export const post = (endpoint, payload) => (
  fetch(API_PATH.replace('BASE-URL', 'ub6j66j7yh') + endpoint, { 
        headers: { 
          "Content-Type": "application/json",
          "Authorization" : "eyJraWQiOiJIV3JFNXhMNWZcL3RoMTJybW5vRHVMR1ZmVWlFd1UrOEVsMnlMK25nVmdGVT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiaF9OaEZGb3Bnam5qc0xzdkNGSGxjZyIsInN1YiI6ImE0ZjJiNjFhLTg5MGUtNDgyNS1hMjc3LWU4ZWZkNWVlMTUyNSIsImF1ZCI6IjhqdjlocmhvZHJmZnY0cDRka2dwbWNydmciLCJjb2duaXRvOmdyb3VwcyI6WyJyZGwtZGF0YWN1c3RvZGlhbnMiXSwiZXZlbnRfaWQiOiI3NTBiNGY4YS03Y2Y0LTExZTgtODY2My0zZjNiNzJkYjgyZGUiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTUzMDQyNTAwMSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0yX0ZUME5UVzkzayIsImNvZ25pdG86dXNlcm5hbWUiOiJhNGYyYjYxYS04OTBlLTQ4MjUtYTI3Ny1lOGVmZDVlZTE1MjUiLCJleHAiOjE1MzA0Mjg2MDEsImlhdCI6MTUzMDQyNTAwMSwiZW1haWwiOiJyZGwtdGVzdGN1c3RvZGlhbkByZGwtdGVzdDEuY29tIn0.LVA0f8xtzTDVSNv1KIJmQWGBZpgtLDmYs7bNNkD5o2qFcqitGXZPmjJe1HSerQQPjBGO_sO7P4cnjF6tpz4pVYedKsxI9hThlrqM5ogwglCAFbathOTFGb-92F39_8Fz7nOFUvnXmmKlS51qta4fsPR9uGKgDnnh06gigWVUpuM6ig878OCu0zXJwg1B2KoB7MQqOKrNpOsxQ46W-VZXpXoHmGcbBS0K07Q_2G0qWizOSgxIW7xOCtRHHtwVPXItQXzPPqC7TT5T34BWBLgNHA7TxdDCeXNllgs84wF0AvMh61A2JheqKD973EGaFuxXVTwr2YsABLW36fnKsrLrsA" 
        },

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
        body: JSON.stringify(payload), 
        headers: { 'Content-Type': 'application/json' }
      })
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





