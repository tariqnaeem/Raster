const API_PATH = process.env.REACT_APP_API_PATH || '';
const API_KEY = "eyJraWQiOiJIV3JFNXhMNWZcL3RoMTJybW5vRHVMR1ZmVWlFd1UrOEVsMnlMK25nVmdGVT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiRmVJbzZuMXRRUVI0M2pfZzFxcGR6dyIsInN1YiI6ImE0ZjJiNjFhLTg5MGUtNDgyNS1hMjc3LWU4ZWZkNWVlMTUyNSIsImF1ZCI6IjhqdjlocmhvZHJmZnY0cDRka2dwbWNydmciLCJjb2duaXRvOmdyb3VwcyI6WyJyZGwtZGF0YWN1c3RvZGlhbnMiXSwiZXZlbnRfaWQiOiI1YmFmMjJhYi03ZjQ3LTExZTgtODY2My0zZjNiNzJkYjgyZGUiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTUzMDY4MDUwOSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0yX0ZUME5UVzkzayIsImNvZ25pdG86dXNlcm5hbWUiOiJhNGYyYjYxYS04OTBlLTQ4MjUtYTI3Ny1lOGVmZDVlZTE1MjUiLCJleHAiOjE1MzA2ODQxMDksImlhdCI6MTUzMDY4MDUwOSwiZW1haWwiOiJyZGwtdGVzdGN1c3RvZGlhbkByZGwtdGVzdDEuY29tIn0.GNUj0DF85iKDqjAtuVh6qaYNmtxbz7GWRrFKbjVSRZo5pOuHYMvU3rMpd8RJ_2NOSiIu3pvy8fYfP0187pLP1TrFXKgO-dp1U0YpNabp016-jhWK3DV0RdOf2jBUhyUmhntTPYPI90Xzu6hROs1op7NBvJjgfqsyx9d1BtMpAv0jAfFxeATSPSoKf3_uD7Q9sln6o5gRZYwc4UuvyvMJYq4PGIjqsDusKKdWhxtgqTDn1uDUrtlYNQxVgo3HcU0px4GyEqdMbWF8f4Jdw2vX2mGDUp1F4ErhO8_T-rZskYiV8LeUWGKqf_X7WpOBJNq6Ew9ZT1WLZvcdB647AqW4WQ";



export const post = (endpoint, payload) => (
  fetch(API_PATH.replace('BASE-URL', 'ub6j66j7yh') + endpoint, { 
        headers: { 
          "Content-Type": "application/json",
          "Authorization" :  API_KEY
        },
        method: 'POST',
        body: JSON.stringify(payload) })
    .then(response => {
      if (response.ok) {
       
        return response.json().then(json => ({ json, response }))
      } else {
        
        const error = response.statusText || response.status;
         
        return Promise.reject(error);
      }
  }).then(({ json }) => json)
);

export const postIngest = (endpoint, payload) => (
  fetch(API_PATH.replace('BASE-URL', 'kwa7ip68qi') + endpoint, { 
    headers: { 
      "Content-Type": "application/json",
      "Authorization" : API_KEY 
    },
        method: 'POST',
        body: JSON.stringify(payload)
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





