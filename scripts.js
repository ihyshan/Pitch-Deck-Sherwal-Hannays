document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.message');
    if (emailInput.value) {
        messageDiv.textContent = `Thank you for subscribing to RideShare! We'll keep you updated.`;
    } else {
        messageDiv.textContent = 'Please enter a valid email address.';
    }
});
