document.addEventListener("DOMContentLoaded", function () {
    console.log("FreeStyle page loaded!");
    
    createStars();    // Generate floating stars
    setupMenuToggle(); // Setup hamburger menu toggle
    typeMessage();    // Start typing effect
});

/* 🌠 Function to Create Floating Stars */
function createStars() {
    const starsContainer = document.querySelector(".stars-container");

    if (!starsContainer) return; // Exit if stars container is missing

    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        // Random Position
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        // Random speed of floating animation
        star.style.animationDuration = (Math.random() * 5 + 3) + "s";

        starsContainer.appendChild(star);
    }
}

/* 🍔 Function to Setup Hamburger Menu Toggle */
function setupMenuToggle() {
    const menuButton = document.querySelector(".hamburger-menu");
    const navMenu = document.getElementById("nav-menu");

    if (!menuButton || !navMenu) {
        console.error("Menu elements not found!");
        return;
    }

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("open"); // Add/remove 'open' class to show/hide nav
    });
}

/* ⌨️ Typing Effect */
function typeMessage() {
    const message = "Express yourself in endless ways...";
    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return; // Exit if element not found

    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting) {
            typingElement.innerHTML = message.substring(0, charIndex++) + "|";
        } else {
            typingElement.innerHTML = message.substring(0, charIndex--) + "|";
        }

        if (charIndex > message.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (charIndex < 0) {
            isDeleting = false;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
}