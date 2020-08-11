class EasyHTTP {

  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      const fetchOpts = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      };
      fetch(url, fetchOpts)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      const fetchOpts = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      };
      fetch(url, fetchOpts)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      const fetchOpts = {
        method: 'DELETE'
      };
      fetch(url, fetchOpts)
      .then(response => response.json())
      .then(() => resolve('resource deleted'))
      .catch(err => reject(err));
    });
  }
}
