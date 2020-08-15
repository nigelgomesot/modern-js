const searchUser = document.querySelector('#searchUser');
const github = new GitHub;
const ui = new UI();

searchUser.addEventListener('keyup', (event) => {
  const text = event.target.value;

  if (text === '') {
    // Clear Profile
    ui.clearProfile();

    return
  };

  github.getUserProfile(text)
    .then(data => {
      if (data.profile.message === 'Not Found') {
        // Show Alert
        console.warn('User Not Found.');
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show Profile
        ui.showProfile(data.profile);
      }
    });
})
