const mobileMenuButton = document.querySelector('.header__mobile-button');
const mobileMenu = document.querySelector('.header__mobile-menu');


function showMobileMenu() {
  mobileMenuButton.classList.toggle('header__mobile-button_open');
  mobileMenu.classList.toggle('header__mobile-menu_isVisible');
};

function splitResults(source, results) {
  for (let i = 0; i <= 2; i++) {
    results.push(source[i]);
  }
}

export { showMobileMenu, mobileMenuButton, splitResults };