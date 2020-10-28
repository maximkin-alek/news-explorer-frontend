export class NewsCard {
  constructor(cardMurkup, api, formatArticleDate) {
    this._cardMurkup = cardMurkup;
    this._api = api;
    this._formatArticleDate = formatArticleDate;

    this.create = this.create.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }
  create(obj) {
    const elem = document.createElement('div');
    elem.insertAdjacentHTML('afterbegin', this._cardMurkup);
    const murkup = elem.firstElementChild;
    murkup.href = obj.url;
    murkup.querySelector('.card__image').src = obj.urlToImage;
    murkup.querySelector('.card__date').textContent = this._formatArticleDate(obj.publishedAt);
    murkup.querySelector('.card__title').textContent = obj.title;
    murkup.querySelector('.card__text').textContent = obj.description;
    murkup.querySelector('.card__source').textContent = obj.source.name;
    return murkup;
  }

  renderIcon(arr) {
    this._api.getUserData()
      .then(() => {
        arr.forEach(elem => {
          elem.classList.remove('card__bookmark-icon_not-authorized');
          elem.classList.add('card__bookmark-icon_authorized');
        });
      })
      .catch(() => {
        arr.forEach(elem => {
          elem.classList.remove('card__bookmark-icon_authorized');
          elem.classList.add('card__bookmark-icon_not-authorized');
        });
      })
  }
}
