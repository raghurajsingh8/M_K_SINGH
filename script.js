// GSAP Animations
window.onload = () => {
  gsap.from(".text-overlay", {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: "power4.out"
  });

  gsap.from(".image-grid img", {
      duration: 1.5,
      opacity: 0,
      scale: 0.9,
      stagger: 0.1,
      ease: "power4.out"
  });

  gsap.from(".navbar", {
      duration: 1.5,
      opacity: 0,
      y: -100,
      ease: "power4.out"
  });
};
