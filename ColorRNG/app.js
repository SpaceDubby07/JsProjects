// Array of hex values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Select elements
const hexBtn = document.getElementById("btn");
const color = document.querySelector(".color");

// Event listener for button click
hexBtn.addEventListener("click", () => {
  // hexColor holds hash since we need it to make hex color
  let hexColor = "#";
  // loop through 6 times - hex is 6 values
  for (let i = 0; i < 6; i++) {
    // # += [000000]
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// Generate a random number
getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
