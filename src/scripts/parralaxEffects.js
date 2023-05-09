let definitonTitle = document.querySelector("#definition-title");
let definitionImage = document.querySelector("#definition-image");
let definitonDescription = document.querySelector("#definiton-description");
let buildTitle = document.querySelector(".graphic-card-build .title");
let actionTitle = document.querySelector(".action .title");
let actionDescription = document.querySelector(".action .description");

import * as texts from "./texts.js";

document.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY >= 40) {
    typingEffect(definitonTitle, "Co to są karty graficzne?", 75, 0);
    typingEffect(definitonDescription, texts.textsObject.graphicCardDefinition, 30, 1500);
  }

  setTimeout(() => {
    definitionImage.style.animation = "graphic-card1 1s 1 ease-in-out";
    definitionImage.style.bottom = "15rem";
  }, 1000);

  if (scrollY >= 1400) {
    typingEffect(buildTitle, "Co znajdziemy w środku karty graficznej?", 75, 0);
  }
  if (scrollY >= 4165) {
    typingEffect(actionTitle, "Jak działają karty graficzne?", 75, 0);
  }
});
