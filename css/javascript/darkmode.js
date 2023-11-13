darkmode = "light";

if (localStorage.getItem("darkmode") === "dark") {
  // Apply the dark theme
  document.body.classList.add("dark-mode");
}

function toggleDarkMode() {
  if (localStorage.getItem("darkmode") === "dark") {
    // Switch to the light theme
    localStorage.setItem("darkmode", "light");
    document.body.classList.remove("dark-mode");
  } else {
    // Switch to the dark theme
    localStorage.setItem("darkmode", "dark");
    document.body.classList.add("dark-mode");
  }
}
