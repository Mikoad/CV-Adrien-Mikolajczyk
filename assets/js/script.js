const burgerMenu = document.getElementById("burgerMenu");
const sidebar = document.getElementById("sidebar");

burgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("displaySidebar");
  burgerMenu.classList.toggle("displaySidebar");
});

// const competencesDev = document.getElementById("competencesDev");
// const competencesTools = document.getElementById("competencesTools");
// window.addEventListener("scroll", () => {
//   let scrollValue =
//     (window.scrollY + window.innerHeight) / document.body.offsetHeight;
//   if (scrollValue > 0.4) {
//     competencesDev.style.transform = "translateX(0)";
//     competencesDev.style.opacity = 1;
//     competencesTools.style.transform = "translateX(0)";
//     competencesTools.style.opacity = 1;
//   }
// });

//competencesTools.style.transform =
//    competencesDev.classList.add("displayCompetences");
//competencesTools.classList.add("displayCompetences");
