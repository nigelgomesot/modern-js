document.querySelector('#getJokes').addEventListener('click', getJokes);

function getJokes(e) {
  const numberCount = document.querySelector('input[type=number]').value;

  xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${numberCount}`);

  xhr.onload = function() {
    if (this.status === 200) {
      const responseJSON = JSON.parse(this.responseText);

      output = '';

      if (responseJSON.type === 'success') {
        responseJSON.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();
  e.preventDefault();
}
