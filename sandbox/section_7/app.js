document.getElementById("button").addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data1.txt', true);

  xhr.onprogress = function () {
    console.log('XHR READYSTATE', xhr.readyState);
  }

  xhr.onload = function() {
    console.log('XHR READYSTATE', xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function() {
    console.log('Get failed');
  }

  xhr.send();
}
