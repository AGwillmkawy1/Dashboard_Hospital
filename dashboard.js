// validate pages

function validateForm() {
    // Get form elements
    const fullNameInput = document.querySelector('input[name="fullname"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const confirmPasswordInput = document.querySelector('input[name="confirm_password"]');
  
    // Check if full name is empty
    if (fullNameInput.value.trim() === '') {
      alert('Please enter your full name.');
      return false;
    }
  
    // Check if phone or email is empty
    if (emailInput.value.trim() === '') {
      alert('Please enter your email.');
      return false;
    }
  
    // Check if password is empty
    if (passwordInput.value.trim() === '') {
      alert('Please enter a password.');
      return false;
    }
  
    // Check if confirm password matches password
    if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
      alert('Passwords do not match.');
      return false;
    }
  
    // Form is valid
    return true;
  }
  