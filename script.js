document.addEventListener("DOMContentLoaded", function () {
    console.log("ZypherGames! Stars are loading...");
    createStars(); // Generate floating stars
});

/* 🌟 Function to Create Floating Stars */
function createStars() {
    const starsContainer = document.querySelector(".stars-container");

    if (!starsContainer) {
        console.error("Error: .stars-container not found in the HTML.");
        return;
    }

    for (let i = 0; i < 50; i++) { // Number of stars
        let star = document.createElement("div");
        star.classList.add("star");

        // Randomize position
        star.style.left = Math.random() * 100 + "vw";  // Random X position
        star.style.top = Math.random() * 100 + "vh";   // Random Y position

        // Random speed
        star.style.animationDuration = (Math.random() * 5 + 3) + "s";

        starsContainer.appendChild(star);
    }
}