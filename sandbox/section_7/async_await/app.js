async function run() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 2000);
  });

  const error = false;

  if (!error) {
    const data = await promise;
    return data;
  } else {
    const data = await Promise.reject(new Error('Something went wrong!'));
    return data;
  }
 }
// run()
//   .then(console.log)
//   .catch(console.warn)

  async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return data;
  }
  getUsers()
    .then(console.log)
