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
const selector = document.getElementsByClassName("testimonials__selector");
let focusNo = 1;
testimonial[focusNo].scrollIntoView();

for (let x = 0; x < selector.length; x++) {
  const className = "testimonials__selector--selected";

  selector[x].addEventListener("click", () => {
    focusNo = x;

    Object.keys(selector).forEach((btn) => {
      if (selector[btn].classList.contains(className)) {
        selector[btn].classList.remove(className);
      }
    });

    testimonial[focusNo].scrollIntoView();
    selector[x].classList.add(className);
  });
}

const testimonialCont = document.getElementsByClassName(
  "testimonials__container"
)[0];
let touchstart;
let touchend;

testimonialCont.addEventListener("touchstart", (e) => {
  touchstart = e.touches[0].clientWidth;
});

testimonialCont.addEventListener("scroll", () => {
  const scrollLength = testimonialCont.scrollLeft;
  const width = testimonial[0].offsetWidth;

  console.log(width)

  const className = "testimonials__selector--selected";
  if (scrollLength < width) {
    Object.keys(selector).forEach((btn) => {
      if (selector[btn].classList.contains(className)) {
        selector[btn].classList.remove(className);
      }
    });
    selector[0].classList.add(className);
  }

  if (scrollLength >= width) {
    Object.keys(selector).forEach((btn) => {
      if (selector[btn].classList.contains(className)) {
        selector[btn].classList.remove(className);
      }
    });
    selector[1].classList.add(className);
  }


  if (scrollLength >= width * 2) {
    Object.keys(selector).forEach((btn) => {
      if (selector[btn].classList.contains(className)) {
        selector[btn].classList.remove(className);
      }
    });
    selector[2].classList.add(className);
  }


  if (scrollLength >= width * 3) {
    Object.keys(selector).forEach((btn) => {
      if (selector[btn].classList.contains(className)) {
        selector[btn].classList.remove(className);
      }
    });
    selector[3].classList.add(className);
  }

});
