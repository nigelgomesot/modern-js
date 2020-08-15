class UI {
  constructor() {
    this.eleProfile = document.querySelector('#profile');
  }

  showProfile(profile) {
    this.eleProfile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class='img-fluid mb-2' src="${profile.avatar_url}">
            <a href="${profile.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">
              View Profile
            </a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${profile.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${profile.public_gists}</span>
            <span class="badge badge-success">Followers: ${profile.followers}</span>
            <span class="badge badge-info">Following: ${profile.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${profile.company}</li>
              <li class="list-group-item">Website/Blog: ${profile.blog}</li>
              <li class="list-group-item">Location: ${profile.location}</li>
              <li class="list-group-item">Member Since: ${profile.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  showAlert(message, className) {
    this.clearAlert();
    const eleAlert = document.createElement('div');
    eleAlert.className = className;
    eleAlert.appendChild(document.createTextNode(message));

    const eleSearchContainer = document.querySelector('.searchContainer');
    const eleSearch = document.querySelector('.search');

    eleSearchContainer.insertBefore(eleAlert, eleSearch);

    setTimeout(() => this.clearAlert(), 3000)
  }

  clearAlert() {
    const eleAlert = document.querySelector('.alert');
    if (eleAlert) {
      eleAlert.remove();
    }
  }

  clearProfile() {
    this.eleProfile.innerHTML = '';
  }
}
