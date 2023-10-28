
const savedMode = localStorage.getItem("dashboardMode");
const body = document.body;


if (savedMode === "night") {
  body.classList.add("night-mode");
}


document.getElementById("toggleModeButton").addEventListener("click", () => {
  
  body.classList.toggle("night-mode");

  const currentMode = body.classList.contains("night-mode") ? "night" : "day";
  localStorage.setItem("dashboardMode", currentMode);
});
