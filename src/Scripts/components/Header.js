import { data } from "autoprefixer";

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
  }

  render(iconColor) {
       this._api.getUserData()
      .then((data) => {

        this.userName = data.name;
        let color = iconColor;
        const userButtons = document.querySelectorAll('.header__user-button')
        userButtons.forEach(element => {
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
        this.setListeners();
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
  setListeners(theme, header, logo) {
    this._mobileMenuButton.addEventListener('click', () => this._showMobileMenu(theme, header, logo));
  };

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