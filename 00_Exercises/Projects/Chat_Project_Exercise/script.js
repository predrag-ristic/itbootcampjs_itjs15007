// Get references to the form and input
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const messages = document.querySelector("#messages");

// Add submit event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the value of the input
  const message = input.value;

  // Create a new message element
  const messageEl = document.createElement("div");
  messageEl.textContent = message;
  messages.appendChild(messageEl);

  // Clear the input
  input.value = "";
});
