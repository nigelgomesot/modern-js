const posts = [
  { title: 'Post 1', body: 'This is post one' },
  { title: 'Post 2', body: 'This is post two' },
];

function createPostSync(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';

    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  })
}

// createPostSync({ title: 'Post 3', body: 'This is post three' });
// getPosts();

function createPostAsync(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);
      console.dir(posts);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: something went wrong!');
      }
      
    }, 2000);
  })

  
}

createPostAsync(
  {title: 'Post 4', body: 'This is post four' }
)
.then(getPosts)
.catch(function(error) {
  console.error(error);
})
;
console.log('js load completed');
