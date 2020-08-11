const http = new EasyHTTP;
let data;

http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.dir(data))
  .catch(err => console.warn(err));

data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@gmail.com'
};
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.dir(data))
  .catch(err => console.warn(err));

data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@gmail.com'
};
http.put('https://jsonplaceholder.typicode.com/users/10', data)
  .then(data => console.dir(data))
  .catch(err => console.warn(err));

http.delete('https://jsonplaceholder.typicode.com/users/10')
  .then(data => console.dir(data))
  .catch(err => console.warn(err));
