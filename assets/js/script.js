const burgerMenu = document.getElementById("burgerMenu");
const sidebar = document.getElementById("sidebar");

burgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("displaySidebar");
  burgerMenu.classList.toggle("displaySidebar");
});

// const competencesDev = document.getElementById("competencesDev");
// const competencesTools = document.getElementById("competencesTools");
