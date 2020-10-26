export class Header {
  constructor(api, articleItems, authItems, userItems, showMobileMenu, mobileMenuButton) {

    this._api = api;
    this._articleItems = articleItems;
    this._authItems = authItems;
    this._userItems = userItems;
    this._showMobileMenu = showMobileMenu;
    this._mobileMenuButton = mobileMenuButton;

    this.render = this.render.bind(this);
    this._setListeners = this._setListeners.bind(this);
  }

  render() {

    this._api.getUserData()
      .then(() => {
        this._setListeners();
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
        this._setListeners();
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
  _setListeners() {
    this._mobileMenuButton.addEventListener('click', this._showMobileMenu);
  };

}