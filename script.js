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
  });
}

testimonialCont.addEventListener("scroll", () => {
  const scrollLength = testimonialCont.scrollLeft;
  const width = testimonial[0].offsetWidth;

  const className = "testimonials__selector--selected";

  if (scrollLength < width) {
    Object.keys(selector).forEach((btn) => {
      if (selector[btn].classList.contains(className)) {
        selector[btn].classList.remove(className);
      }
    });
    focusNo = 0
  }

  if (scrollLength >= width) {
    Object.keys(selector).forEach((btn) => {
      if (selector[btn].classList.contains(className)) {
        selector[btn].classList.remove(className);
      }
    });
    focusNo = 1
  }


  if (scrollLength >= width * 2) {
    Object.keys(selector).forEach((btn) => {
      if (selector[btn].classList.contains(className)) {
        selector[btn].classList.remove(className);
      }
    });
    focusNo = 2
  }


  if (scrollLength >= width * 3) {
    Object.keys(selector).forEach((btn) => {
      if (selector[btn].classList.contains(className)) {
        selector[btn].classList.remove(className);
      }
    });
    focusNo = 3
  }
  selector[focusNo].classList.add(className);

});
