let definitonTitle = document.querySelector("#definition-title");
let definitionImage = document.querySelector("#definition-image");
let definitonDescription = document.querySelector("#definiton-description");
let buildTitle = document.querySelector(".graphic-card-build .title");
let actionTitle = document.querySelector(".action .title");
let algorithmTitle = document.querySelector(".algorithm .content .title");
let producersTitle = document.querySelector(".producers .content .title");
let usageTitle = document.querySelector(".usage .content .title");
let integratedTitle = document.querySelector(".integrated .content .title");
let integratedDescription = document.querySelector(".integrated .content .description");
let parametersTitle = document.querySelector(".parameters .title");
let architectureTitle = document.querySelector(".architecture .title");

import * as texts from "./texts.js";

document.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY >= 40) {
    typingEffect(definitonTitle, "Co to są karty graficzne?", 50, 0);
    typingEffect(definitonDescription, texts.textsObject.graphicCardDefinition, 30, 1500);
    setTimeout(() => {
      definitionImage.style.animation = "graphic-card1 1s 1 ease-in-out";
      definitionImage.style.bottom = "15rem";
    }, 1000);
  }
  if (scrollY >= 1400) {
    typingEffect(buildTitle, "Co znajdziemy w środku karty graficznej?", 50, 0);
  }
  if (scrollY >= 2768) {
    typingEffect(producersTitle, "Producenci kart graficznych", 50, 0);
  }
  if (scrollY >= 4165) {
    typingEffect(actionTitle, "Jak działają karty graficzne?", 50, 0);
  }
  if (scrollY >= 5260) {
    typingEffect(algorithmTitle, "Trochę o algorytmach kart graficznych", 50, 0);
  }
  console.log(scrollY);
});
