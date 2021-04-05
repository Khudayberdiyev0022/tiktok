const navbar = document.querySelector("#nav");
const GivenColor = document.querySelector(".navContainer");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    console.log("hello");
    navbar.style.backgroundColor = "#000";
    navbar.style.height = "10vh";
    navbar.style.display = "flex";
    navbar.style.justifyContent = "center";
    navbar.style.alignItems = "center";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

// modal menu
const modalClick = document.querySelector("#modalClick");
const btnModal = document.querySelector("#btnModal");
const closeSvg = document.querySelector(".closeSvg");

btnModal.addEventListener("click", () => {
  modalClick.style.display = "flex";
});
closeSvg.addEventListener("click", () => {
  modalClick.style.display = "none";
});

// man or woman

const man = document.querySelector("#man");
const woman = document.querySelector("#woman");

man.addEventListener("click", () => {
  man.style.backgroundColor = "blue";
  woman.style.backgroundColor = "white";
});
woman.addEventListener("click", () => {
  woman.style.backgroundColor = "blue";
  man.style.backgroundColor = "white";
});

// button submit
const button = document.querySelector("#submit");
const name = document.querySelector("#name");

name.addEventListener("keyup", () => {
  if (name.children[1].value.length > 5) {
    button.style.backgroundColor = "#ff004f";
  } else {
    button.style.backgroundColor = "#ff004f4d";
  }
});
