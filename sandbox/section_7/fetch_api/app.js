const getText = () => {
  fetch('text.txt')
    .then(response => response.text()
    )
    .then(text => document.getElementById('output').innerHTML = text
    )
    .catch(error => console.error(error)
    )
}

const getJSON = () => {
  fetch('post.json')
    .then(handleNetworkError)
    .then(response => response.json()
    )
    .then(json => {
      let output = '';

      json.forEach(post => {
        output += `<li>${post.title}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.warn(error)
    )
}

const getExternal = () => {
  fetch('https://api.github.com/users')
    .then(handleNetworkError)
    .then(response => {
      return response.json();
    })
    .then(json => {
      let output = '';

      json.forEach(user => {
        output += `<li>${user.login}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.warn(error)
    )
}

handleNetworkError = response => {
  if (!response.ok) throw new Error(response.error);

  return response;
}

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);
