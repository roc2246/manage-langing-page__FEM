const mobileIcon = (icon) => document.getElementsByClassName(`nav__${icon}`)[0];
const toggle = document.getElementsByClassName("nav__toggle")[0];
const nav = document.getElementsByClassName("nav__top")[0];

toggle.addEventListener("click", () => {
  if (
    mobileIcon("close").style.display === "" ||
    mobileIcon("close").style.display === "none"
  ) {
    mobileIcon("open").style.display = "none";
    mobileIcon("close").style.display = "inline";

    nav.classList.add("nav--mobile");
  } else {
    mobileIcon("open").style.display = "inline";
    mobileIcon("close").style.display = "none";

    nav.classList.remove("nav--mobile");
  }
});
