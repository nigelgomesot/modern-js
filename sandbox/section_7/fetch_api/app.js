document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('text.txt')
    .then(function(response) {
      return response.text();
    })
    .then(function(text) {
      document.getElementById('output').innerHTML = text;
    })
    .catch(function(error) {
      console.error(error)
    })
}

function getJSON() {
  fetch('post.json')
    .then(handleNetworkError)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let output = '';

      json.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(error) {
      console.warn(error)
    })
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(handleNetworkError)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let output = '';

      json.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(error) {
      console.warn(error)
    })
}

function handleNetworkError(response) {
  if (!response.ok) throw new Error(response.error);

  return response;
}