// Get the button by its ID
const button = document.getElementById("colorButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Change the background color of the page
    document.body.style.backgroundColor = randomColor;
});