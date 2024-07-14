// Variable to hold the countdown interval
let countdown;

// Function to start the timer
function startTimer() {
  // Get the number of minutes from the input field with id "minutes"
  const minutes = parseInt(document.getElementById("minutes").value);
  // Calculate the end time in milliseconds
  const endTime = Date.now() + minutes * 60000;

  // Set an interval to update the timer every second
  countdown = setInterval(() => {
    // Get the current time
    const now = Date.now();
    // Calculate the time left in milliseconds
    const timeLeft = endTime - now;

    // If time is up, clear the interval, display "00:00", and show an alert
    if (timeLeft <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").textContent = "00:00";
      alert("Time's up!");
      return;
    }

    // Calculate the minutes and seconds left
    const minutesLeft = Math.floor(timeLeft / 60000);
    const secondsLeft = Math.floor((timeLeft % 60000) / 1000);
    
    // Update the timer display
    document.getElementById("timer").textContent = `${minutesLeft}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  }, 1000);
}
