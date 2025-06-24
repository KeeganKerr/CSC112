// Function to validate inputs
function validateInput() {
    // Get values from input fields
    const first = document.getElementById('firstName').value.trim();
    const last = document.getElementById('lastName').value.trim();
    const zip = document.getElementById('zipCode').value.trim();
    const message = document.getElementById('message');

    // Combine first and last name with a space
    const fullName = first + " " + last;

    // Check if combined name is too long
    if (fullName.length > 20) {
        message.textContent = "Name too long.";
        return; // Stop if invalid
    }

    // Check if ZIP code is not exactly 5 digits
    if (!/^\d{5}$/.test(zip)) {
        message.textContent = "Invalid zip code.";
        return; // Stop if invalid
    }

    // All inputs valid; show secret message
    message.style.color = 'green'; // Change message color to green
    message.textContent = `Hi, ${fullName}! Secret: Keep smiling!`;
} 
