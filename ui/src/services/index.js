const API_PATH = process.env.REACT_APP_API_PATH || '';


export const post = (endpoint, payload) => (
  fetch(API_PATH.replace('BASE-URL', 'ub6j66j7yh') + endpoint, { 
        headers: { 
          "Content-Type": "application/json",
          "Authorization" : "eyJraWQiOiJIV3JFNXhMNWZcL3RoMTJybW5vRHVMR1ZmVWlFd1UrOEVsMnlMK25nVmdGVT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiWVB0Y1RyTXpXUzlNdE95NlNpQlFVdyIsInN1YiI6ImE0ZjJiNjFhLTg5MGUtNDgyNS1hMjc3LWU4ZWZkNWVlMTUyNSIsImF1ZCI6IjhqdjlocmhvZHJmZnY0cDRka2dwbWNydmciLCJjb2duaXRvOmdyb3VwcyI6WyJyZGwtZGF0YWN1c3RvZGlhbnMiXSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1MzAyNTI4MjEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMi5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMl9GVDBOVFc5M2siLCJjb2duaXRvOnVzZXJuYW1lIjoiYTRmMmI2MWEtODkwZS00ODI1LWEyNzctZThlZmQ1ZWUxNTI1IiwiZXhwIjoxNTMwMjU2NDIxLCJpYXQiOjE1MzAyNTI4MjEsImVtYWlsIjoicmRsLXRlc3RjdXN0b2RpYW5AcmRsLXRlc3QxLmNvbSJ9.Ff36sxFUXAB8FZWOci4OR44EqiqKn8hdsfzV8r8S_7yumSpACK0PH84biJufF-gZ78_lvqh4FmJu66_G0xXCb6cgEsTe7doq3ViBJ6NtlWtZg7T8_e20p3dCwSDrCeJtTWnaEDMT5tx-Rxuc1mndyhSk69yd__dgwrdfJl88eC4VQKWlq7gnAQGwbkETbGa242jxxCYycHDsXxF2CjiYzk8jQUf8TEdHlqvwXfSrEiFylMU9YwEwPCWXL1XHE6v8NWcK5oVWlov1xY5QemwRg-ifTD3d84wHIvo6TiTgn4AWLAHIpYqUdQo6bv-Kte-DnEyj_edi5kBz8dfbhxjFuQ" 
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





