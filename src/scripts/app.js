let nextButton = document.querySelectorAll("#next");
let cursor = document.querySelector(".cursor");
let nextProducer = document.querySelector(".next-producer");
let previousProducer = document.querySelector(".previous-producer");
let headquarter1 = document.querySelector("#headquarter1");
let headquarter2 = document.querySelector("#headquarter2");
let producerDescription = document.querySelector(".content .description");
let progressBar = document.querySelector("#progress-bar");
let nextAction = document.querySelector("#next-action");
let previousAction = document.querySelector("#previous-action");
let actionDescription = document.querySelector(".action .content .description");
let nextAlgorithm = document.querySelector("#next-algorithm");
let previousAlgorithm = document.querySelector("#previous-algorithm");
let algorithmDescrtiption = document.querySelector(
  ".algorithm .content .description"
);
let algorithmImage = document.querySelector(".algorithm img");

import * as texts from "./texts.js";

let producer = 0;
let action = 0;
let algorithm = 0;

nextButton.forEach((button) => {
  button.addEventListener("click", () => {
    let scrollY = window.scrollY;
    let windowHeight = window.innerHeight;
    window.scrollTo({
      top: scrollY + windowHeight,
      behavior: "smooth",
    });
  });
});

document.addEventListener("mousemove", (event) => {
  let X = event.clientX;
  let Y = event.clientY;
  cursor.style.left = X + "px";
  cursor.style.top = Y + "px";
});

nextProducer.addEventListener("click", () => {
  if (producer == 0) {
    producer = 1;
    headquarter1.setAttribute("src", "/src/images/amd-headquarters.jpg");
    headquarter2.setAttribute("src", "/src/images/amd-headquarters-2.jpg");
    producerDescription.innerHTML = texts.textsObject.AMD;
  } else if (producer == 1) {
    producer = 2;
    headquarter1.setAttribute("src", "/src/images/intel-headquarters.jpg");
    headquarter2.setAttribute("src", "/src/images/intel-headquarters-2.jpg");
    producerDescription.innerHTML = texts.textsObject.intel;
  }
});

previousProducer.addEventListener("click", () => {
  if (producer == 2) {
    producer = 1;
    headquarter1.setAttribute("src", "/src/images/amd-headquarters.jpg");
    headquarter2.setAttribute("src", "/src/images/amd-headquarters-2.jpg");
    producerDescription.innerHTML = texts.textsObject.AMD;
  } else if (producer == 1) {
    producer = 0;
    headquarter1.setAttribute("src", "/src/images/nvidia-headquarters.jpg");
    headquarter2.setAttribute("src", "/src/images/nvidia-headquarters-2.jpg");
    producerDescription.innerHTML = texts.textsObject.nvidia;
  }
});

nextAction.addEventListener("click", () => {
  switch (action) {
    case 0:
      action = 1;
      actionDescription.textContent = texts.textsObject.memory;
      break;
    case 1:
      action = 2;
      actionDescription.textContent = texts.textsObject.videoOutput;
      break;
    case 2:
      action = 3;
      actionDescription.textContent = texts.textsObject.drivers;
      break;
  }
});

previousAction.addEventListener("click", () => {
  switch (action) {
    case 3:
      action = 2;
      actionDescription.textContent = texts.textsObject.videoOutput;
      break;
    case 2:
      action = 1;
      actionDescription.textContent = texts.textsObject.memory;
      break;
    case 1:
      action = 0;
      actionDescription.textContent = texts.textsObject.processing;
      break;
  }
});

nextAlgorithm.addEventListener("click", () => {
  switch (algorithm) {
    case 0:
      algorithm = 1;
      algorithmDescrtiption.innerHTML = texts.textsObject.resterization;
      algorithmImage.setAttribute("src", "/src/img/resterization.png");
      break;
    case 1:
      algorithm = 2;
      algorithmDescrtiption.innerHTML = texts.textsObject.mapping;
      break;
    case 2:
      algorithm = 3;
      algorithmDescrtiption.innerHTML = texts.textsObject.defferedShading;
      break;
    case 3:
      algorithm = 4;
      algorithmDescrtiption.innerHTML = texts.textsObject.antiAliasing;
      break;
  }
});

previousAlgorithm.addEventListener("click", () => {
  switch (algorithm) {
    case 4:
      algorithm = 3;
      algorithmDescrtiption.innerHTML = texts.textsObject.defferedShading;
      break;
    case 3:
      algorithm = 2;
      algorithmDescrtiption.innerHTML = texts.textsObject.mapping;
      break;
    case 2:
      algorithm = 1;
      algorithmDescrtiption.innerHTML = texts.textsObject.resterization;
      break;
    case 1:
      algorithm = 0;
      algorithmDescrtiption.innerHTML = texts.textsObject.raytracing;
      break;
  }
});

document.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let windowHeight = window.innerHeight;
  let documentHeight = document.body.scrollHeight;
  progressBar.style.width =
    (scrollY / (documentHeight - windowHeight)) * 100 + "%";
});
