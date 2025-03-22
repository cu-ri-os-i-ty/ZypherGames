document.addEventListener("DOMContentLoaded", function () {
    console.log("FreeStyle page loaded!");
    
    createStars();    // Generate floating stars
    typeMessage();    // Start typing effect
    setupMenu();      // Ensure menu remains hidden on load
});

/* 🌠 Create Floating Stars */
function createStars() {
    const starsContainer = document.querySelector(".stars-container");

    if (!starsContainer) return;

    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        star.style.animationDuration = (Math.random() * 5 + 3) + "s";

        starsContainer.appendChild(star);
    }
}

/* 🟢 Make sure the menu is hidden on page load */
function setupMenu() {
    const fullscreenMenu = document.getElementById("fullscreen-menu");
    if (fullscreenMenu) {
        fullscreenMenu.classList.remove("show"); // Ensures menu stays hidden at first
    }
}

/* 🟢 Open Fullscreen Menu */
function openMenu() {
    const fullscreenMenu = document.getElementById("fullscreen-menu");
    fullscreenMenu.classList.add("show");
}

/* 🟢 Close Fullscreen Menu */
function closeMenu() {
    const fullscreenMenu = document.getElementById("fullscreen-menu");
    fullscreenMenu.classList.remove("show");
}

/* 🟢 Close Menu When Clicking Outside */
document.addEventListener("click", function (event) {
    const fullscreenMenu = document.getElementById("fullscreen-menu");
    const menuContent = document.querySelector(".menu-content");
    const hamburgerBtn = document.querySelector(".hamburger-menu");

    // Check if clicked outside of menu content and not the hamburger button
    if (fullscreenMenu.classList.contains("show") && 
        !menuContent.contains(event.target) && 
        !hamburgerBtn.contains(event.target)) {
        closeMenu();
    }
});

/* ⌨️ Typing Effect */
function typeMessage() {
    const message = "Express yourself in endless ways...";
    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

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