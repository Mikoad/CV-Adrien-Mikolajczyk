const burgerMenu = document.getElementById("burgerMenu");
const sidebar = document.getElementById("sidebar");
const homePage = document.querySelector(".homePage");
burgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("displaySidebar");
  burgerMenu.classList.toggle("displaySidebar");
});
homePage.addEventListener("click", () => {
  sidebar.classList.remove("displaySidebar");
  burgerMenu.classList.remove("displaySidebar");
});

//----------display competences -----------
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

//------Type Writer-------------
// const target = document.getElementById("target");
// let array = ["développeur", "passionné"];
// let wordIndex = 0;
// let letterIndex = 0;

// const createLetter = () => {
//   const letter = document.createElement("span");
//   target.appendChild(letter);
//   letter.textContent = array[wordIndex][letterIndex];
//   setTimeout(() => {
//     letter.remove();
//   }, 2000);
// };

// const loop = () => {
//   setTimeout(() => {
//     if (wordIndex >= array.length) {
//       wordIndex = 0;
//     } else if (letterIndex < array[wordIndex].length) {
//       createLetter();
//       letterIndex++;

//       loop();
//     } else {
//       wordIndex++;
//       letterIndex = 0;
//       setTimeout(() => {
//         loop();
//       }, 2000);
//     }
//   }, 80);
// };
// loop();
