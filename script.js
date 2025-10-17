// Show greeting and live time on website

// Greet user on page load
window.addEventListener("load", function() {
  alert("👋 Welcome, Shivaling! Thanks for visiting your static website.");
  updateClock();
  setInterval(updateClock, 1000); // update every 1 second
});

// Function to update the clock
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const time = now.toLocaleTimeString();
  clock.textContent = "⏳ Current Time: " + time;
}
