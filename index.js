// GSAP animation for the home page
gsap.from("#main-heading", { 
    duration: 1.5, 
    y: -50, 
    opacity: 0, 
    ease: "bounce.out" 
});

gsap.from("#enter-button", { 
    duration: 1.5, 
    y: 50, 
    opacity: 0, 
    delay: 0.5, 
    ease: "power2.out" 
});

// GSAP Exit animation when the button is clicked
document.getElementById("enter-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default link behavior for now

    // Exit animation before navigating to the plants page
    gsap.to("#main-heading", {
        duration: 1, 
        y: -100, 
        opacity: 0, 
        ease: "power2.in"
    });

    gsap.to("#enter-button", {
        duration: 1, 
        y: 100, 
        opacity: 0, 
        ease: "power2.in", 
        onComplete: function() {
            // Navigate to the second page after animation completes
            window.location.href = "plants.html";
        }
    });
});
