const navToggle = document.querySelector(".nav-hamburgesa");
const navMenu = document.querySelector(".nav-menu-phone");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

function hideCookies() {
  document.querySelector("aside#cookies").style="transition: transform 0.5s ease; transform: translateY(100%);";
}

let botones = document.getElementsByTagName('input');
for (let bt of botones)
  bt.addEventListener('click',hideCookies,false);


