// Get the necessary elements
const muyuImg = document.getElementById("muyuImg");
const tikSound = document.getElementById("tikSound");
const amountDisplay = document.getElementById("amount");

let isTimerRunning = false;
let timerInterval;
let secondsCount = 0;

// Function to start or stop the timer
function toggleTimer() {
  if (isTimerRunning) {
    // Stop the timer
    clearInterval(timerInterval);
    isTimerRunning = false;
    console.log("start playing");
  } else {
    // Start the timer
    timerInterval = setInterval(() => {
      tikSound.play();
      secondsCount++;
      updateTimerDisplay();
    }, 1500);
    console.log("stop playing");
    isTimerRunning = true;
  }
}

function updateTimerDisplay() {
  amountDisplay.textContent = secondsCount;
}

// Add a click event listener to the image to toggle the timer
muyuImg.addEventListener("click", toggleTimer);
