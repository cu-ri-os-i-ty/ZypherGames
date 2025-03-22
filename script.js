document.addEventListener("DOMContentLoaded", function () {
    console.log("FreeStyle page loaded!");
    
    createStars();    // Generate floating stars
    typeMessage();    // Start typing effect
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