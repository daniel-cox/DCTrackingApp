const loginForm = document.querySelector('#loginForm');
const API = 'https://646525da228bd07b3543e0a9.mockapi.io/userLogin'

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { username, password, rememberMe } = event.target.elements;
  const userData = { username: username.value, password: password.value };
  
  try {
    const response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      if (rememberMe.checked) {
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
      }
      window.location.href = '/dashboard';
    } else {
      alert('Invalid username or password');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong, please try again later');
  }
});
