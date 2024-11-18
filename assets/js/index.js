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

document.getElementById("enter-button").addEventListener("click", function(event) {
    event.preventDefault();

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
            window.location.href = "plants.html";
        }
    });
});
