const button = document.querySelector('.header__menu-button');
const blocksOfLinks = Array.from(document.querySelectorAll('.header__links'));

button.addEventListener('click', toggleMenu);

function toggleMenu() {
  blocksOfLinks.forEach(block => block.classList.toggle('header__links_active'));
  button.classList.toggle('header__menu-button_cross')
}
