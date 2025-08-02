// Load mode from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const storedMode = localStorage.getItem("mode");
  const isDark = storedMode === "dark";
  if (isDark) {
    document.body.classList.add("dark-mode");
  }
  updateIcon(isDark ? "dark" : "light");
});

// Toggle between light and dark mode
function toggleMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("mode", isDark ? "dark" : "light");
  updateIcon(isDark ? "dark" : "light");
}

// Update the moon/sun icon
function updateIcon(mode) {
  const iconButton = document.getElementById("modeIcon");
  if (!iconButton) return;

  iconButton.innerHTML =
    mode === "dark"
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}