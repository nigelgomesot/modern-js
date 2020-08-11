class EasyHTTP {

  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();

    return responseData;
  }

  async post(url, data) {
    const fetchOpts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    const response = await fetch(url, fetchOpts);
    const responseData = await response.json();

    return responseData;
  }

  async put(url, data) {
    const fetchOpts = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    const response = await fetch(url, fetchOpts);
    const responseData = await response.json();

    return responseData;
  }

  async delete(url) {
    const fetchOpts = {
      method: 'DELETE'
    };

    const response = await fetch(url, fetchOpts);
    const responseData = await 'resource deleted';

    return responseData;
  }
}
