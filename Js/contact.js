const form = document.querySelector('.contact-form');
const messageBox = form.querySelector('.form-message');
const submitButton = form.querySelector('button[type="submit"]');

function validateEmail(email) {
  // Simple email regex for demo purposes
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // stop actual form submission

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    // Clear previous messages
  messageBox.textContent = '';
  messageBox.className = 'form-message';
  messageBox.style.display = 'none';

    if (!name || !email || !message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    
  if (!validateEmail(email)) {
    showMessage('Please enter a valid email address.', 'error');
    return;
  }

  // Disable button and show loading text
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  // Fake sending delay
  setTimeout(() => {
    showMessage(`Thanks for your message, ${name}! We'll get back to you soon.`, 'success');
    form.reset();
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
  }, 2000);
});

function showMessage(message, type) {
  messageBox.textContent = message;
  messageBox.classList.add(type);
  messageBox.style.display = 'block';
}