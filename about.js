   // Open the login modal
   function openLoginModal() {
    const modal = document.getElementById("login-modal");
    modal.style.display = "block";
    modal.querySelector("input").focus(); // Focus on the first input
}

// Close the login modal
function closeLoginModal() {
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("login-username").blur(); // Remove focus when closing
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    alert('Login successful!'); // Simulate successful login
    closeLoginModal(); // Close the modal after successful login
    window.location.href = 'lab1.html'; // Redirect to tabs page
}

// Handle registration form submission
function handleRegistration(event) {
    event.preventDefault(); // Prevent form submission
    alert('Registration successful!'); // Simulate successful registration
    closeLoginModal(); // Close the modal after successful registration
    window.location.href = 'lab1.html'; // Redirect to tabs page (optional)
}

// Show registration form
function showRegistrationForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("registration-form").style.display = "block";
}

// Show login form
function showLoginForm() {
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("login-modal");
    if (event.target === modal) {
        closeLoginModal();
    }
};