const searchUser = document.querySelector('#searchUser');
const github = new GitHub;

searchUser.addEventListener('keyup', (event) => {
  const text = event.target.value;

  if (text === '') {
    // Clear Profile

    return
  };

  github.getUserProfile(text)
    .then(data => {
      if (data.profile.message === 'Not Found') {
        // Show Alert
        console.warn('User Not Found.');
      } else {
        // Show Profile
        console.log(data);
      }
    });
})
