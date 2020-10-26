const mobileMenuButton = document.querySelector('.header__mobile-button');
const mobileMenu = document.querySelector('.header__mobile-menu');


function showMobileMenu() {
  mobileMenuButton.classList.toggle('header__mobile-button_open');
  mobileMenu.classList.toggle('header__mobile-menu_isVisible');
}

export {showMobileMenu, mobileMenuButton};