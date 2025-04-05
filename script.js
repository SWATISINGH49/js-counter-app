// Step 1: Select the HTML elements
const countElement = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Step 2: Create a variable to store the count
let count = 0;

// Step 3: Add event listeners to the buttons
increaseBtn.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countElement.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countElement.textContent = count;
});



// note:- 
// 💡 Why This?
// id="count": So JavaScript can easily select and change the number.

// id="increase", decrease, reset: Each button has an ID to add event listeners.
// 💡 Why This?
// document.getElementById(): grabs the button and text.

// addEventListener('click', ...): runs a function when the button is clicked.

// countElement.textContent = count: updates the number on screen.