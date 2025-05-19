// 1. DARK/LIGHT MODE TOGGLE
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  // Change icon based on mode
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

// 2. SKILL BARS ANIMATION ON SCROLL
window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  const skillsPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (skillsPos < screenPos) {
    document.querySelectorAll(".progress").forEach(bar => {
      bar.style.width = bar.classList.contains("html") ? "90%" :
                        bar.classList.contains("css") ? "80%" :
                        bar.classList.contains("js") ? "75%" :
                        bar.classList.contains("react") ? "65%" : "0";
    });
  }
});
