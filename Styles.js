// Get elements
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('login-form');

// Open login modal
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

// Close login modal
closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Handle login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Hardcoded credentials for demo
  if (username === 'admin' && password === 'password') {
    alert('Login Successful!');
    loginModal.style.display = 'none';
  } else {
    alert('Invalid username or password!');
  }
});

// Close modal on clicking outside
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});