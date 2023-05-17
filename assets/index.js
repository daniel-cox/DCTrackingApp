const loginForm = document.querySelector('#loginForm');
const API = 'https://646525da228bd07b3543e0a9.mockapi.io/userLogin'

loginForm.addEventListener('submit', async ({ target: { elements: { username, password, rememberMe } }, preventDefault }) => {
  preventDefault();

  const response = await fetch(API, {
    method: 'POST',
    body: JSON.stringify({ username: username.value, password: password.value }),
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
});
