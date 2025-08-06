// Function to validate inputs
function validateInput() {
    // Get values from inputs
    const first = document.getElementById('firstName').value.trim();
    const last = document.getElementById('lastName').value.trim();
    const zip = document.getElementById('zipCode').value.trim();
    const message = document.getElementById('message');

    // Combine first and last name
    const fullName = first + " " + last;

    // Check length
    if (fullName.length > 20) {
        message.textContent = "Name too long.";
        return; // Stop if invalid
    }

    // Check if ZIP code is not exactly 5 digits
    if (!/^\d{5}$/.test(zip)) {
        message.textContent = "Invalid zip code.";
        return; // Stop if wrong
    }

    // Show message if valid
    message.style.color = 'green'; // Change message color to green
    message.textContent = `Hi, ${fullName}! Secret: Keep smiling!`;
} 

let number = Math.floor(Math.random() * 20) + 1;

// starts the game when clicked
    function checkGuess() {
      let guess = parseInt(document.getElementById("guess").value);
      let message = document.getElementById("message");

      // Checks to see if the number is correct when clicked
      if (guess === number) {
        message.textContent = " Correct! You guessed the number! Now do it again HAHAHAHAHA!!!!";
        message.style.color = "green";
      } else if (guess < number) {
        message.textContent = "Too low. Try again.";
        message.style.color = "red"
      } else {
        message.textContent = "Too high. Try again.";
        message.style.color = "red"
      }
    }
// Resets the game and rerolls the number on click
    function resetGame() {
      number = Math.floor(Math.random() * 20) + 1;
      document.getElementById("message").textContent = "";
      document.getElementById("guess").value = "";
    }