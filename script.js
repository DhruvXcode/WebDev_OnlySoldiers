function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';  // Show login form
        signupForm.style.display = 'none';  // Hide sign-up form
    } else {
        loginForm.style.display = 'none';  // Hide login form
        signupForm.style.display = 'block';  // Show sign-up form
    }
}
