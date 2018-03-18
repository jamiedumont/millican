var menuButton = document.getElementById("menu-button");
var siteNavClasses = document.getElementById("site-navigation").classList;

function toggleMenu() {
  return siteNavClasses.toggle("open");
}

menuButton.onclick = toggleMenu;
