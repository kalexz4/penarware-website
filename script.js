// --- Start of script.js ---
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
