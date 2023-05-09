let author = document.querySelector("#author");
let typed = new Typed(author, {
  strings: ["Dawid Śliwa", "Kacper Markitoń"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

let elements = [];

function typingEffect(element, message, time, timeout) {
  let i = 0;
  if (!elements.includes(element)) {
    elements.push(element);
    setTimeout(() => {
      let interval = setInterval(() => {
        i++;
        element.innerHTML = message.substring(0, i);
        if (i >= message.length) {
          clearInterval(interval);
        }
      }, time);
    }, timeout);
  }
}
