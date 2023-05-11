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
let algorithmDescrtiption = document.querySelector(".algorithm .content .description");
let algorithmImage = document.querySelector(".algorithm img");
let nextUsage = document.querySelector("#next-usage");
let previousUsage = document.querySelector("#previous-usage");
let usageDecsription = document.querySelector(".usage .content .description");
let dropdownMenu = document.querySelector(".dropdown ul");
let dropdownSelected = document.querySelector(".dropdown .selected");
let dropdownOption = document.querySelectorAll(".dropdown ul li p");
let parametersDescription = document.querySelector(".parameters .description");
let nextArchitecture = document.querySelector("#next-architecture");
let previousArchitecture = document.querySelector("#previous-architecture");
let architectureDescription = document.querySelector(".architecture .description");
let architectureImage = document.querySelector(".architecture img");

import * as texts from "./texts.js";

let producer = 0;
let action = 0;
let algorithm = 0;
let usage = 0;
let architecture = 0;

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

dropdownSelected.addEventListener("click", () => {
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "inline";
    parametersDescription.innerHTML = "";
  } else {
    dropdownMenu.style.display = "none";
  }
});

dropdownOption.forEach((option) => {
  option.addEventListener("click", () => {
    dropdownSelected.textContent = option.textContent;
    dropdownMenu.style.display = "none";
    switch (dropdownSelected.textContent) {
      case "Rdzenie":
        parametersDescription.innerHTML = texts.textsObject.cores;
        break;
      case "Taktowanie":
        parametersDescription.innerHTML = texts.textsObject.timing;
        break;
      case "Pamięć":
        parametersDescription.innerHTML = texts.textsObject.memoryParametr;
        break;
      case "Przepustowość":
        parametersDescription.innerHTML = texts.textsObject.capacity;
        break;
      case "Interfejs":
        parametersDescription.innerHTML = texts.textsObject.interface;
        break;
      case "Technologie":
        parametersDescription.innerHTML = texts.textsObject.technology;
        break;
    }
  });
});

nextProducer.addEventListener("click", () => {
  switch (producer) {
    case 0:
      producer = 1;
      headquarter1.setAttribute("src", "/graphicCardsWebsite/src/images/amd-headquarters.jpg");
      headquarter2.setAttribute("src", "/graphicCardsWebsite/src/images/amd-headquarters-2.jpg");
      producerDescription.innerHTML = texts.textsObject.AMD;
      break;
    case 1:
      producer = 2;
      headquarter1.setAttribute("src", "/graphicCardsWebsite/src/images/intel-headquarters.jpg");
      headquarter2.setAttribute("src", "/graphicCardsWebsite/src/images/intel-headquarters-2.jpg");
      producerDescription.innerHTML = texts.textsObject.intel;
      break;
  }
});

previousProducer.addEventListener("click", () => {
  switch (producer) {
    case 2:
      producer = 1;
      headquarter1.setAttribute("src", "/graphicCardsWebsite/src/images/amd-headquarters.jpg");
      headquarter2.setAttribute("src", "/graphicCardsWebsite/src/images/amd-headquarters-2.jpg");
      producerDescription.innerHTML = texts.textsObject.AMD;
      break;
    case 1:
      producer = 0;
      headquarter1.setAttribute("src", "/graphicCardsWebsite/src/images/nvidia-headquarters.jpg");
      headquarter2.setAttribute("src", "/graphicCardsWebsite/src/images/nvidia-headquarters-2.jpg");
      producerDescription.innerHTML = texts.textsObject.nvidia;
      break;
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
      algorithmImage.setAttribute("src", "/graphicCardsWebsite/src/images/resterization.png");
      break;
    case 1:
      algorithm = 2;
      algorithmDescrtiption.innerHTML = texts.textsObject.mapping;
      algorithmImage.setAttribute("src", "/graphicCardsWebsite/src/images/mapping.jpg");
      break;
    case 2:
      algorithm = 3;
      algorithmDescrtiption.innerHTML = texts.textsObject.defferedShading;
      algorithmImage.setAttribute("src", "/graphicCardsWebsite/src/images/defferedShading.png");
      break;
    case 3:
      algorithm = 4;
      algorithmDescrtiption.innerHTML = texts.textsObject.antiAliasing;
      algorithmImage.setAttribute("src", "/graphicCardsWebsite/src/images/antialiasing.jpg");
      break;
  }
});

previousAlgorithm.addEventListener("click", () => {
  switch (algorithm) {
    case 4:
      algorithm = 3;
      algorithmDescrtiption.innerHTML = texts.textsObject.defferedShading;
      algorithmImage.setAttribute("src", "/graphicCardsWebsite/src/images/defferedShading.png");
      break;
    case 3:
      algorithm = 2;
      algorithmDescrtiption.innerHTML = texts.textsObject.mapping;
      algorithmImage.setAttribute("src", "/graphicCardsWebsite/src/images/mapping.jpg");
      break;
    case 2:
      algorithm = 1;
      algorithmDescrtiption.innerHTML = texts.textsObject.resterization;
      algorithmImage.setAttribute("src", "/graphicCardsWebsite/src/images/resterization.png");
      break;
    case 1:
      algorithm = 0;
      algorithmDescrtiption.innerHTML = texts.textsObject.raytracing;
      algorithmImage.setAttribute("src", "/graphicCardsWebsite/src/images/raytracing.png");
      break;
  }
});

nextUsage.addEventListener("click", () => {
  switch (usage) {
    case 0:
      usage = 1;
      usageDecsription.innerHTML = texts.textsObject.videoRendering;
      break;
    case 1:
      usage = 2;
      usageDecsription.innerHTML = texts.textsObject.design3D;
      break;
    case 2:
      usage = 3;
      usageDecsription.innerHTML = texts.textsObject.cryptocurrencies;
      break;
  }
});

previousUsage.addEventListener("click", () => {
  switch (usage) {
    case 3:
      usage = 2;
      usageDecsription.innerHTML = texts.textsObject.design3D;
      break;
    case 2:
      usage = 1;
      usageDecsription.innerHTML = texts.textsObject.videoRendering;
      break;
    case 1:
      usage = 0;
      usageDecsription.innerHTML = texts.textsObject.computerGames;
      break;
  }
});

nextArchitecture.addEventListener("click", () => {
  switch (architecture) {
    case 0:
      architecture = 1;
      architectureDescription.innerHTML = texts.textsObject.AMDRDNA;
      architectureImage.setAttribute("src", "/graphicCardsWebsite/src/images/amdRDNA.jpg");
      break;
    case 1:
      architecture = 2;
      architectureDescription.innerHTML = texts.textsObject.IntelXE;
      architectureImage.setAttribute("src", "/graphicCardsWebsite/src/images/intelxe.jpg");
      break;
    case 2:
      architecture = 3;
      architectureDescription.innerHTML = texts.textsObject.ARMMali;
      architectureImage.setAttribute("src", "/graphicCardsWebsite/src/images/armmali.jpg");
      break;
    case 3:
      architecture = 4;
      architectureDescription.innerHTML = texts.textsObject.AppleM1;
      architectureImage.setAttribute("src", "/graphicCardsWebsite/src/images/applem1.jpg");
      break;
  }
});

previousArchitecture.addEventListener("click", () => {
  switch (architecture) {
    case 4:
      architecture = 3;
      architectureDescription.innerHTML = texts.textsObject.ARMMali;
      architectureImage.setAttribute("src", "/graphicCardsWebsite/src/images/armmali.jpg");
      break;
    case 3:
      architecture = 2;
      architectureDescription.innerHTML = texts.textsObject.IntelXE;
      architectureImage.setAttribute("src", "/graphicCardsWebsite/src/images/intelxe.jpg");
      break;
    case 2:
      architecture = 1;
      architectureDescription.innerHTML = texts.textsObject.AMDRDNA;
      architectureImage.setAttribute("src", "/graphicCardsWebsite/src/images/amdRDNA.jpg");
      break;
    case 1:
      architecture = 0;
      architectureDescription.innerHTML = texts.textsObject.CUDA;
      architectureImage.setAttribute("src", "/graphicCardsWebsite/src/images/nvidia-cuda-2.jpg");
      break;
  }
});

document.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let windowHeight = window.innerHeight;
  let documentHeight = document.body.scrollHeight;
  progressBar.style.width = (scrollY / (documentHeight - windowHeight)) * 100 + "%";
});
