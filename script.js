const mobileEle = (ele) => document.getElementsByClassName(`nav__${ele}`)[0];
const hero = document.getElementsByClassName("hero")[0];
const header = document.getElementsByTagName("header")[0];
let isNavOpen = false;

function navCondition() {
  return (
    mobileEle("close").style.display === "" ||
    mobileEle("close").style.display === "none"
  );
}

function toggleIcon(open, close) {
  mobileEle("open").style.display = open;
  mobileEle("close").style.display = close;
}

function toggleStyle(action) {
  mobileEle("top").classList[action]("nav--mobile");
  hero.classList[action]("hero--mobile");
}

function createContainer() {
  const container = document.createElement("div");
  container.className = "mobile-container";
  return {
    create: container,
    var: document.getElementsByClassName("mobile-container")[0],
  };
}

function appendEle(prop) {
  const container = createContainer()[prop];
  if (prop === "create") {
    container.appendChild(mobileEle("top"));
    header.append(container);
  } else if (prop === "var") {
    header.appendChild(mobileEle("top"));
    container.remove();
  }
}

mobileEle("toggle").addEventListener("click", () => {
  if (navCondition()) {
    isNavOpen = true;
    toggleIcon("none", "inline");
    toggleStyle("add");
    appendEle("create");
  } else if (!navCondition()) {
    isNavOpen = false;
    toggleIcon("inline", "none");
    toggleStyle("remove");
    appendEle("var");
  }
});

window.addEventListener("resize", (e) => {
  const width = e.target.outerWidth;
  const isNavClassOpen = mobileEle("top").classList.contains("nav--mobile");

  if (width > 709 && isNavClassOpen) {
    toggleStyle("remove");
    appendEle("var");
  } else if (width < 710 && isNavOpen === true && !isNavClassOpen) {
    toggleStyle("add");
    appendEle("create");
  }
});

const testimonial = document.getElementsByClassName("testimonial");
const testimonialCont = document.getElementsByClassName(
  "testimonials__container"
)[0];
const selector = document.getElementsByClassName("testimonials__selector");
const className = "testimonials__selector--selected";

let focusNo = 0;
testimonialCont.scrollLeft = 20;

function removeBtnStyle() {
  Object.keys(selector).forEach((btn) => {
    if (selector[btn].classList.contains(className)) {
      selector[btn].classList.remove(className);
    }
  });
}

function targetActive(conditional, no) {
  if (conditional) {
    removeBtnStyle();
    focusNo = no;
  }
}

for (let x = 0; x < selector.length; x++) {
  selector[x].addEventListener("click", () => {
    focusNo = x;
    removeBtnStyle();
    testimonial[focusNo].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  });
}

testimonialCont.addEventListener("scroll", () => {
  const scrollLength = testimonialCont.scrollLeft;
  const width = testimonial[0].offsetWidth;

  for (let x = 0; x < selector.length; x++) {
    let conditional;

    if (x === 0) {
      conditional = scrollLength < width;
    } else if (x >= 1) {
      conditional = scrollLength >= width * x;
    }
    targetActive(conditional, x);
  }

  selector[focusNo].classList.add(className);
});

let drag = false;
let init;
let scrollLeft;

testimonialCont.addEventListener("mousedown", (e) => {
  drag = true;
  testimonialCont.classList.add("testimonials__container--active");
  init = e.pageX - testimonialCont.offsetLeft;
  scrollLeft = testimonialCont.scrollLeft;
});
testimonialCont.addEventListener("mouseleave", () => {
  drag = false;
  testimonialCont.classList.remove("testimonials__container--active");
});
testimonialCont.addEventListener("mouseup", () => {
  drag = false;
  testimonialCont.classList.remove("testimonials__container--active");
});
testimonialCont.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (drag === true) {
    const x = e.pageX - testimonialCont.offsetLeft;
    const distance = x - init;
    testimonialCont.scrollLeft = scrollLeft - distance;
  }
});

const form = document.getElementsByClassName("submit-email")[0];
const input = document.getElementsByClassName("submit-email__input")[0];
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const errorMssg = document.getElementsByClassName("submit-email__error-txt")[0];

form.addEventListener("submit", (e) => {
  input.classList.remove("submit-email__input--error");
  errorMssg.style.display = "none";
  e.preventDefault();
  if (!input.value.match(emailRegex)) {
    errorMssg.style.display = "block";
    input.classList.add("submit-email__input--error");
  } else {
    alert("Email is valid.");
  }
});
