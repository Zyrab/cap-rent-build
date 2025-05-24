let currentTheme = setTheme();

document.getElementById("theme-toggle").addEventListener("click", (e) => {
  e.preventDefault();

  document.body.classList.toggle("dark");
  currentTheme = !currentTheme;
  localStorage.setItem("savedTheme", currentTheme ? "dark" : "light");
});

function setTheme() {
  const savedTheme = localStorage.getItem("savedTheme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    return savedTheme === "dark";
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    localStorage.setItem("savedTheme", "dark");
    return true;
  }
  localStorage.setItem("savedTheme", "light");
  return false;
}
