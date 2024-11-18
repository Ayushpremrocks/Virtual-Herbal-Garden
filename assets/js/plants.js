gsap.from("#plants-heading", { 
    duration: 1.5, 
    y: -50, 
    opacity: 0, 
    ease: "power2.out"
});

gsap.utils.toArray(".intro-slide").forEach(slide => {
    gsap.from(slide, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: slide,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});

gsap.utils.toArray(".plant-card").forEach(card => {
    gsap.from(card, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});
