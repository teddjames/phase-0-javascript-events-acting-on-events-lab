// Your code here
function moveDodgerLeft() {
  const dodger = document.getElementById("dodger");
  // Get the current left position and remove 'px'
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  // Ensure the dodger doesn’t move off-screen
  if (left > 0) {
    dodger.style.left = `${left - 4}px`;
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById("dodger");
  // Get the current left position and remove 'px'
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  // Assuming the game area width is 400px and dodger's width is 40px,
  // so the right boundary is 360px
  if (left < 360) {
    dodger.style.left = `${left + 4}px`;
  }
}
