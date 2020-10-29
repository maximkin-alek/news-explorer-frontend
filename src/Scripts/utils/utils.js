const mobileMenuButton = document.querySelector('.header__mobile-button');
const mobileMenu = document.querySelector('.header__mobile-menu');


function showMobileMenu(theme, header, logo) {
  if (theme === 'white') {
    header.classList.toggle('header_white-theme');
    logo.classList.toggle('header__text_white-theme');
    mobileMenuButton.classList.toggle('header__mobile-button_open');
    mobileMenu.classList.toggle('header__mobile-menu_isVisible');
  } else {
    mobileMenuButton.classList.toggle('header__mobile-button_open');
    mobileMenu.classList.toggle('header__mobile-menu_isVisible');
  }

};

function splitResults(source, results) {
  for (let i = 0; i <= 2; i++) {
    results.push(source[i]);
  }
  source.splice(0, 3);
}

function formatArticleDate(articleDate) {
  const date = new Date(articleDate);

  const formatter = new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  let dateStr = (formatter.format(date));
  dateStr = dateStr.split(' ', 3);
  dateStr[1] += ',';
  return dateStr.join(' ');
}

export { showMobileMenu, mobileMenuButton, splitResults, formatArticleDate };