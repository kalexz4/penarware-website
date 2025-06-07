document.addEventListener("DOMContentLoaded", () => {
  // Load particle background
  tsParticles.load("tsparticles", {
    background: {
      color: "#0d0d0d"
    },
    fpsLimit: 60,
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 130,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      collisions: { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 0.6,
        straight: false
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  });

  // Toggle Read More content
  const section = document.getElementById("readMoreSection");
  const toggle = document.getElementById("readMoreToggle");

  toggle.addEventListener("click", () => {
    section.classList.toggle("show");
    toggle.textContent = section.classList.contains("show") ? "Read Less" : "Read More";
  });

  // Custom cursor
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    cursorDot.style.top = `${clientY}px`;
    cursorDot.style.left = `${clientX}px`;
    cursorOutline.style.top = `${clientY}px`;
    cursorOutline.style.left = `${clientX}px`;
  });
});
