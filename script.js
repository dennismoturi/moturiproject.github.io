// Greeting based on the time of day
function displayGreeting() {
  const greetingElement = document.createElement("p");
  const hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good morning!";
  } else if (hours < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  greetingElement.textContent = greeting;
  document.body.prepend(greetingElement);
}

// Function to toggle bio section
function toggleBio() {
  const bioMore = document.getElementById("bio-more");
  bioMore.style.display = bioMore.style.display === "none" ? "block" : "none";
}

// Validate form function
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorElement = document.getElementById("form-error");

  if (!name || !emailPattern.test(email)) {
    errorElement.textContent = "Please enter a valid name and email.";
    return false;
  }

  errorElement.textContent = "";
  alert("Thank you for subscribing!");
  return true;
}

// Call greeting function on page load
window.onload = displayGreeting;
