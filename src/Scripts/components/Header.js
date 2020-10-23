export class Header {
  constructor(api, articleItems, authItems, userItems) {

    this._api = api;
    this._articleItems = articleItems;
    this._authItems = authItems;
    this._userItems = userItems;

    this.render = this.render.bind(this);
  }

  render() {

    this._api.getUserData()
      .then(() => {
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

}