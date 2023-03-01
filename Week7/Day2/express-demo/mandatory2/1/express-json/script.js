fetch('/user')
  .then(response => response.json())
  .then(user => {
    const userDetails = document.getElementById('user-details');
    userDetails.innerHTML = `
      <p>First Name: ${user.firstname}</p>
      <p>Last Name: ${user.lastname}</p>
    `;
    console.log(user);
  });
