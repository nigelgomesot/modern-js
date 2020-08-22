class GitHub {

  async getUserProfile(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?`);
    const profile = await profileResponse.json();

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&sort='created_at: desc'`);
    const repos = await reposResponse.json();


    return { profile, repos };
  }
}
