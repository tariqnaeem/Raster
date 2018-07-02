const API_PATH = process.env.REACT_APP_API_PATH || '';


export const post = (endpoint, payload) => (
  fetch(API_PATH.replace('BASE-URL', 'ub6j66j7yh') + endpoint, { 
        headers: { 
          "Content-Type": "application/json",
          "Authorization" : "eyJraWQiOiJIV3JFNXhMNWZcL3RoMTJybW5vRHVMR1ZmVWlFd1UrOEVsMnlMK25nVmdGVT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiUlE5UGpkWmdXckRlOTV6cF9SYjgwdyIsInN1YiI6ImE0ZjJiNjFhLTg5MGUtNDgyNS1hMjc3LWU4ZWZkNWVlMTUyNSIsImF1ZCI6IjhqdjlocmhvZHJmZnY0cDRka2dwbWNydmciLCJjb2duaXRvOmdyb3VwcyI6WyJyZGwtZGF0YWN1c3RvZGlhbnMiXSwiZXZlbnRfaWQiOiIzMWM4Mjc5MS03ZGJhLTExZTgtOGRhYi02ZDNiMTcxZGQ5MzciLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTUzMDUwOTkyOCwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0yX0ZUME5UVzkzayIsImNvZ25pdG86dXNlcm5hbWUiOiJhNGYyYjYxYS04OTBlLTQ4MjUtYTI3Ny1lOGVmZDVlZTE1MjUiLCJleHAiOjE1MzA1MTM1MjgsImlhdCI6MTUzMDUwOTkyOCwiZW1haWwiOiJyZGwtdGVzdGN1c3RvZGlhbkByZGwtdGVzdDEuY29tIn0.NwvlDN9O9kKAIhKAaI-Gw4HoyYmUemLsQ5GGJ9661FaLCzHEO32EPwFWxSNL637c2OE7ktfeRzrMxZ6WnCz0bPQs__5s8yCrkxV5KzgwX5Facw2AFLAInJhSviQ-zLnV7XdMarZiz-4pr5KgitdJsbaUoAqydLosPtkXl5QR5AXrmKHuXUutYdKcMwbkqIW_olHM4YrpxNdyIIecCKRAq4QRWGR7KPK_a3RIa5sOClntu1JLsIji1ePjiWoWvwybUJEMNsbeJ0baI1IZ1p6qwuUMDjOKSe12hkzYhS4AhMaOCQ-S1okrSNNCqwR7hDJZgmgcGQAvtXkb_pSEdQ7rzg" 
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





