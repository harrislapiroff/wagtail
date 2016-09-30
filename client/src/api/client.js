export const get = (url) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const options = {
    credentials: 'same-origin',
    headers: headers,
    method: 'GET'
  };

  return fetch(url, options).then(response => response.json());
};
