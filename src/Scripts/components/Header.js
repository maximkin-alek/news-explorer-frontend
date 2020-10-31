export class Header {
  constructor(headerParams) {

    this._api = headerParams.mainApi;
    this._articleItems = headerParams.articleItems;
    this._authItems = headerParams.authItems;
    this._userItems = headerParams.userItems;
    this._showMobileMenu = headerParams.showMobileMenu;
    this._mobileMenuButton = headerParams.mobileMenuButton;

    this.userName = ''

    this.render = this.render.bind(this);
    this.setListeners = this.setListeners.bind(this);
    this._renderByColor = this._renderByColor.bind(this);
    this.removeListener = this.removeListener.bind(this);
    this._logout = this._logout.bind(this);
  }

  render(iconColor, pageArticles) {
    this._api.getUserData()
      .then((data) => {

        this.userName = data.name;
        let color = iconColor;
        const userButtons = document.querySelectorAll('.header__user-button')
        userButtons.forEach(element => {
          this._setLogoutListener(element);
          element.textContent = data.name;
          this._renderByColor(element, color);
        })

        this._articleItems.forEach(element => {
          element.classList.add('header__list-item_isVisible');
        })
        this._userItems.forEach(element => {
          element.classList.add('header__list-item_isVisible');
        })
        this._authItems.forEach(element => {
          element.classList.remove('header__list-item_isVisible');
        })
      })
      .catch((err) => {
        if (pageArticles) {

          window.location.replace('https://maximkin-alek.github.io/news-explorer-frontend/index.html');
        }
        this._articleItems.forEach(element => {
          element.classList.remove('header__list-item_isVisible');
        })
        this._userItems.forEach(element => {
          element.classList.remove('header__list-item_isVisible');
        })
        this._authItems.forEach(element => {
          element.classList.add('header__list-item_isVisible');
        })
      })

  }

  _logout() {
    this._api.logout()
      .then(() => {
        window.location.replace('http://localhost:8080');
      })
      .catch((err) => alert(err));
  }

  setListeners(theme, header, logo) {
    this._mobileMenuButton.addEventListener('click', () => this._showMobileMenu(theme, header, logo));
  };
  removeListener(theme, header, logo) {
    this._mobileMenuButton.removeEventListener('click', () => this._showMobileMenu(theme, header, logo));
  }

  _setLogoutListener(elem) {
    elem.addEventListener('click', this._logout);
  }

  _renderByColor(element, iconColor) {
    if (iconColor === 'white') {
      element.insertAdjacentHTML('beforeend', `<img
    class= "header__logout-icon"
    src = "./images/logout.svg"
    alt = "иконка выхода"
      /> `)
    }
    else {
      element.insertAdjacentHTML('beforeend', `<img
    class= "header__logout-icon"
    src = "./images/logout-black.svg"
    alt = "иконка выхода"
      /> `)
    }

  }
}