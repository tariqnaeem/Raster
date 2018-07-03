const API_PATH = process.env.REACT_APP_API_PATH || '';


export const post = (endpoint, payload) => (
  fetch(API_PATH.replace('BASE-URL', 'ub6j66j7yh') + endpoint, { 
        headers: { 
          "Content-Type": "application/json",
          "Authorization" : "eyJraWQiOiJIV3JFNXhMNWZcL3RoMTJybW5vRHVMR1ZmVWlFd1UrOEVsMnlMK25nVmdGVT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiNTJZX0J5UlYxendBaFhwSGF0R0tjZyIsInN1YiI6ImE0ZjJiNjFhLTg5MGUtNDgyNS1hMjc3LWU4ZWZkNWVlMTUyNSIsImF1ZCI6IjhqdjlocmhvZHJmZnY0cDRka2dwbWNydmciLCJjb2duaXRvOmdyb3VwcyI6WyJyZGwtZGF0YWN1c3RvZGlhbnMiXSwiZXZlbnRfaWQiOiJlNzAyZTJjZC03ZThiLTExZTgtYWE5My05OThjMzdjMjBjODIiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTUzMDU5OTk5NywiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0yX0ZUME5UVzkzayIsImNvZ25pdG86dXNlcm5hbWUiOiJhNGYyYjYxYS04OTBlLTQ4MjUtYTI3Ny1lOGVmZDVlZTE1MjUiLCJleHAiOjE1MzA2MDM1OTcsImlhdCI6MTUzMDU5OTk5NywiZW1haWwiOiJyZGwtdGVzdGN1c3RvZGlhbkByZGwtdGVzdDEuY29tIn0.l9IJP1M96jjcT5fnczjk0q8lL4WXMr9YuH3NUjRhQAILytERMh6gDQRD35HNzrOuw3y6_qeal_vjHxfKFY9-Y0LSxIqIzfaAP8tgjvMqQfdWuRhM7-8VYKMwy4zCXtsnrXaA2GrBG47Me9jRWEj367Bfq91c3IMXxivgpbNuYOkp_0I8ORLThddKKU_DU-bcjt8-J8lDnhpqEBT0T87hfFRBrhZ16ALCnMltVT436WjnqEXxxExxj1VN8gFzs2zXUfNaQL2RJi6elhyC8b8RYOj-_eBaoSTHZgQ8nqnDZ1jzFBJyuQel_lsAzNPhgwV2NvxGrkeX6lfPZe4-TxNJdw" 
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





