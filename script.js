let countdown;

      function startTimer() {
        const minutes = parseInt(document.getElementById("minutes").value);
        const endTime = Date.now() + minutes * 60000;
        countdown = setInterval(() => {
          const now = Date.now();
          const timeLeft = endTime - now;
          if (timeLeft <= 0) {
            clearInterval(countdown);
            document.getElementById("timer").textContent = "00:00";
            alert("Time's up!");
            return;
          }
          const minutesLeft = Math.floor(timeLeft / 60000);
          const secondsLeft = Math.floor((timeLeft % 60000) / 1000);
          document.getElementById("timer").textContent = `${minutesLeft}:${
            secondsLeft < 10 ? "0" : ""
          }${secondsLeft}`;
        }, 1000);
      }