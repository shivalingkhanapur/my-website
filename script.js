// Show a welcome message when the page loads
window.addEventListener("load", function() {
  alert("🎉 Welcome to My AWS S3 Static Website!");
  updateClock();
  setInterval(updateClock, 1000); // Update every second
});

// Function to show the current time on the page
function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clockElement.textContent = "Current Time: " + timeString;
}
