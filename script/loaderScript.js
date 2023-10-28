
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay (3 seconds in this example)
    setTimeout(function () {
        document.querySelector("body").style.display = "block";
        document.querySelector(".loading").style.display = "none";
    }, 3000); // Adjust the delay in milliseconds
});
