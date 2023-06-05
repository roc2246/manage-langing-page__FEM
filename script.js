const mobileIcon = (icon) => document.getElementsByClassName(`nav__${icon}`)[0];
const toggle = document.getElementsByClassName("nav__toggle")[0];
const nav = document.getElementsByClassName("nav__top")[0];
const hero = document.getElementsByClassName("hero")[0]

toggle.addEventListener("click", () => {
  if (
    mobileIcon("close").style.display === "" ||
    mobileIcon("close").style.display === "none"
  ) {
    mobileIcon("open").style.display = "none";
    mobileIcon("close").style.display = "inline";

    nav.classList.add("nav--mobile");
    hero.classList.add("hero--mobile")

    const links = document.getElementsByClassName("nav--mobile")[0]
    const container = document.createElement("div")
    container.appendChild(links)
    container.className = "mobile-container"
    document.getElementsByTagName("header")[0].append(container)

  } else {
    mobileIcon("open").style.display = "inline";
    mobileIcon("close").style.display = "none";

    nav.classList.remove("nav--mobile");
    hero.classList.remove("hero--mobile")

    const links = document.getElementsByClassName("nav__top")[0]
    const header = document.getElementsByTagName("header")[0]
    header.appendChild(links)
    const container = document.getElementsByClassName("mobile-container")[0]
    container.remove()

  }
});
