// Function to run the game logic
function playGame() {
  // Generate a random number between 1 and 10
  const number = Math.floor(Math.random() * 10) + 1;

  // Get the result div from the HTML
  const resultDiv = document.getElementById('result');

  // Check if the number is less than 5
  if (number < 5) {
    resultDiv.textContent = `You rolled a ${number}. You lose!`;
    resultDiv.style.color = 'red';
  } else {
    resultDiv.textContent = `You rolled a ${number}. You win!`;
    resultDiv.style.color = 'green';
  }
}
