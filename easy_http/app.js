const http = new easyHTTP;
let data;
http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts) {

  (error) ? console.error(error) : console.log(posts);
});

http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post) {

  (error) ? console.error(error) : console.log(post);
});

data = {
  "userId": 101,
  "title": "Test Title",
  "body": "Test Body"
}
http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, posts) {

  (error) ? console.error(error) : console.log(posts);
});


data = {
  "userId": 101,
  "title": "Test Title",
  "body": "Test Body"
}
http.put('https://jsonplaceholder.typicode.com/posts/100', data, function(error, posts) {

  (error) ? console.error(error) : console.log(posts);
});

http.delete('https://jsonplaceholder.typicode.com/posts/100', function(error, response) {

  (error) ? console.error(error) : console.log(response);
});
