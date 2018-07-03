const API_PATH = process.env.REACT_APP_API_PATH || '';


export const post = (endpoint, payload) => (
  fetch(API_PATH.replace('BASE-URL', 'ub6j66j7yh') + endpoint, { 
        headers: { 
          "Content-Type": "application/json",
          "Authorization" : "eyJraWQiOiJIV3JFNXhMNWZcL3RoMTJybW5vRHVMR1ZmVWlFd1UrOEVsMnlMK25nVmdGVT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoidWp5bGtrSHpjOTljaW5DUUpkekxjUSIsInN1YiI6ImE0ZjJiNjFhLTg5MGUtNDgyNS1hMjc3LWU4ZWZkNWVlMTUyNSIsImF1ZCI6IjhqdjlocmhvZHJmZnY0cDRka2dwbWNydmciLCJjb2duaXRvOmdyb3VwcyI6WyJyZGwtZGF0YWN1c3RvZGlhbnMiXSwiZXZlbnRfaWQiOiI4Yjg2NDQ5Yy03ZWI2LTExZTgtOTA0ZS03M2MzY2Q1MWE2NWUiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTUzMDYxODMxMiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0yX0ZUME5UVzkzayIsImNvZ25pdG86dXNlcm5hbWUiOiJhNGYyYjYxYS04OTBlLTQ4MjUtYTI3Ny1lOGVmZDVlZTE1MjUiLCJleHAiOjE1MzA2MjE5MTIsImlhdCI6MTUzMDYxODMxMiwiZW1haWwiOiJyZGwtdGVzdGN1c3RvZGlhbkByZGwtdGVzdDEuY29tIn0.eba5B1Q0lzb5H4l7T0sdS8uWy7DNBymOJtnHyDdMy2nCLZZHGYGe7phjRHD2cYdlJ5NLMi57LgejLhuUqM1nx_MC1398IOQwClp3p14r62TqL9aRZ3FHNxja_PJk9IyGUMEi5pV9d24EmJWt_Wu5IA3jMkiEa9ztlFke8hmcyHiwSbc-1vxqQx2wx0nx44wK9CVdKk2N_uP3TWpwCNx57rZVgwWrAiKh5MSaRwBJ2oGIneUUtchA04K8B7UAXqQWY6_pSJgkS4ll5UuokRmYhwmdyqPWX8o_wQAWRTyxDkFsil4gagayN5RslgG9-iasdaPOBx4LFqJrYT79iTDIvQ" 
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





