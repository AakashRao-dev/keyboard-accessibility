document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');

  // USING THE BLUR EVENT
  emailInput.addEventListener('blur', function () {
    if (!isValidEmail(emailInput.value)) {
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
    }
  });

  function isValidEmail(email) {
    // Simple email validation for demonstration purposes
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
