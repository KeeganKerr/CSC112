// Store the interval ID so we can stop movement
let moveInterval = null;

/**
 * 
 * Disables Start, enables Stop, and begins moving the image.
 */
function startMoving() {
  document.getElementById('Start').disabled = true;
  document.getElementById('Stop').disabled = false;

  moveImage(); // start moving immediately
  moveInterval = setInterval(moveImage, 1000); // repeat every second
}

/**
 * Called when Stop button is clicked.
 * Disables Stop, enables Start, and stops moving the image.
 */
function stopMoving() {
  document.getElementById('Stop').disabled = true;
  document.getElementById('Start').disabled = false;

  clearInterval(moveInterval);
  moveInterval = null;
}

/**
 * Moves the meme image to a random location on the page.
 */
function moveImage() {
  const img = document.getElementById('memeImage');
  const maxX = window.innerWidth - img.width;
  const maxY = window.innerHeight - img.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  img.style.left = randomX + 'px';
  img.style.top = randomY + 'px';}
// Makes the audio play when the sound button is clicked
  function clickSound(){
    var sound = document.getElementById('audio');
    sound.play();
  }