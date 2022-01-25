const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Frontend Developer.",
  "Coding Enthusiast.",
  "Passionate Learner. ",
];
const typingDelay = 100;
const erasingDelay = 70;
const newTextDelay = 900; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  // var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

// Hamburger Menu

const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector(".nav-list");
const navBar = document.querySelector(".nav-bar");
const navItems = document.getElementById("nav-items");
const navItem = document.getElementById("nav-item");
const navIte = document.getElementById("nav-ite");
const navIt = document.getElementById("nav-it");
const navI = document.getElementById("nav-i");

openMenu.addEventListener("click", () => {
  navBar.style.display = "flex";
  nav.style.display = "flex";
  navBar.style.top = "0";
  nav.style.top = "0";
});
closeMenu.addEventListener("click", () => {
  nav.style.top = "-150%";
  navBar.style.top = "-150%";
});
const hide = () => {
  nav.style.top = "-500%";
  navBar.style.top = "-150%";
};
navItems.addEventListener("click", hide);
navItem.addEventListener("click", hide);
navIte.addEventListener("click", hide);
navIt.addEventListener("click", hide);
navI.addEventListener("click", hide);
