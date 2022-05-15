const requestURL = 'https://jsonplaceholder.typicode.com/posts';

function sendRequest(method, url, body) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  });
}

sendRequest('GET', requestURL)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const dataObj = {
  title: 'Title',
  body: 'Some kind of text',
};

sendRequest('POST', requestURL, dataObj)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
