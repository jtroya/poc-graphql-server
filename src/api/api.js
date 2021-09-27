const fetch = require('node-fetch');

function api(url, method = 'GET') {
  return fetch(url, {
    method: method.toUpperCase(),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}

module.exports = api;
