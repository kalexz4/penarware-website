// Particle initialization for your existing #tsparticles div
document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("tsparticles", {
    background: {
      color: "transparent",
    },
    fpsLimit: 60,
    particles: {
      color: { value: "#a259ff" },
      links: {
        color: "#a259ff",
        distance: 130,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        value: 50,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  });

  // Add custom cursor elements dynamically
  const cursorDot = document.createElement("div");
  cursorDot.classList.add("cursor-dot");
  const cursorOutline = document.createElement("div");
  cursorOutline.classList.add("cursor-outline");

  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);

  // Style cursor elements (you can move this CSS to your CSS file if you want)
  const style = document.createElement("style");
  style.innerHTML = `
    .cursor-dot {
      width: 8px;
      height: 8px;
      background-color: #a259ff;
      border-radius: 50%;
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: background-color 0.3s ease;
      mix-blend-mode: difference;
    }
    .cursor-outline {
      width: 32px;
      height: 32px;
      border: 2px solid #a259ff;
      border-radius: 50%;
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: all 0.15s ease;
      mix-blend-mode: difference;
    }
  `;
  document.head.appendChild(style);

  // Move custom cursors with mouse
  window.addEventListener("mousemove", (e) => {
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
    cursorOutline.style.left = e.clientX + "px";
    cursorOutline.style.top = e.clientY + "px";
  });

  // Optional: Hide default cursor for better effect
  document.body.style.cursor = "none";
});
