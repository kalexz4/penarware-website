// --- Start of script.js ---
tsParticles.load("tsparticles", {
  background: {
    color: "#0d0d0d"
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: "#ffffff"
    },
    links: {
      color: "#ffffff",
      distance: 130,
      enable: true,
      opacity: 0.2,
      width: 1
    },
    collisions: {
      enable: false
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce"
      },
      random: false,
      speed: 0.6,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 50
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 3 }
    }
  },
  detectRetina: true
});


function toggleReadMore() {
  const section = document.getElementById("readMoreSection");
  const toggle = document.getElementById("readMoreToggle");

  section.classList.toggle("show");
  toggle.textContent = section.classList.contains("show") ? "Read Less" : "Read More";
}

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  cursorDot.style.top = `${e.clientY}px`;
  cursorDot.style.left = `${e.clientX}px`;

  cursorOutline.style.top = `${e.clientY}px`;
  cursorOutline.style.left = `${e.clientX}px`;
});
// --- End of script.js ---
