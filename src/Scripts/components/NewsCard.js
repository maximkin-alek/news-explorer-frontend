export class NewsCard {
  constructor(api, formatArticleDate) {
    this._api = api;
    this._formatArticleDate = formatArticleDate;

    this.create = this.create.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.addListenerDeleteCard = this.addListenerDeleteCard.bind(this);
    this._removeListener = this._removeListener.bind(this);
  }
  create(obj, cardMurkup, keyword) {
    const elem = document.createElement('div');
    elem.insertAdjacentHTML('afterbegin', cardMurkup);
    const murkup = elem.firstElementChild;
    if (obj.url !== undefined) { murkup.href = obj.url; } else { murkup.href = obj.link; }
    if (keyword !== undefined) { murkup.dataset.keyword = keyword; }

    const cardImage = murkup.querySelector('.card__image');
    if (obj.urlToImage === null) { cardImage.src = 'https://m.seonews.ru/upload/iblock/db6/db63011ab8f84d0d905775eaae06301a.jpg' } else {
      if (obj.urlToImage === undefined) { cardImage.src = obj.image } else {
        cardImage.src = obj.urlToImage
      }
    }


    const cardDate = murkup.querySelector('.card__date');
    if (obj.publishedAt === undefined) { cardDate.textContent = this._formatArticleDate(obj.date) } else {
      cardDate.dataset.date = obj.publishedAt;
      cardDate.textContent = this._formatArticleDate(obj.publishedAt);
    }

    if (obj.keyword !== undefined) {
      murkup.querySelector('.card__theme').textContent = obj.keyword;
    }

    murkup.querySelector('.card__title').textContent = obj.title;
    const cardText = murkup.querySelector('.card__text');
    if (obj.description !== undefined) { cardText.textContent = obj.description; } else {
      cardText.textContent = obj.text;
    }

    const cardSource = murkup.querySelector('.card__source');
    if (obj.source.name !== undefined) { cardSource.textContent = obj.source.name } else { cardSource.textContent = obj.source; }
    if (obj._id !== undefined) {
      murkup.id = obj._id
    }
    return murkup;
  }
  deleteCard(event) {
    event.preventDefault();
    let card = event.target.parentElement;
    this._api.removeArticle(card.id)
      .then(() => {
        this._removeListener(card);
        card.remove();
        card = null;
      })
      .catch((err) => {
        alert(err)
      })
  }

  renderIcon(arr) {
    this._api.getUserData()
      .then(() => {
        arr.forEach(elem => {
          elem.classList.remove('card__bookmark-icon_not-authorized');
          elem.classList.add('card__bookmark-icon_authorized');
          elem.addEventListener('click', ((event) => {

            event.preventDefault();

            if (event.target.classList.contains('card__bookmark-icon_liked')) {
              this._api.removeArticle(event.target.parentElement.id)
                .then((data) => {
                  event.target.classList.remove('card__bookmark-icon_liked');
                })
                .catch((err) => {
                  alert(err);
                })
            } else {
              const articleLink = event.target.parentElement.href;
              const articleKeyword = event.target.parentElement.dataset.keyword;
              const articleTitle = event.target.parentElement.querySelector('.card__title').textContent;
              const articleText = event.target.parentElement.querySelector('.card__text').textContent;
              const articleDate = event.target.parentElement.querySelector('.card__date').dataset.date;
              const articleSource = event.target.parentElement.querySelector('.card__source').textContent;
              const articleImage = event.target.parentElement.querySelector('.card__image').src;

              this._api.createArticle(articleLink, articleKeyword, articleTitle, articleText, articleDate, articleSource, articleImage)
                .then((data) => {
                  event.target.classList.add('card__bookmark-icon_liked');
                  event.target.parentElement.id = data.id;
                })
                .catch((err) => {
                  alert(err);
                })
            }
          }))
        });
      })
      .catch(() => {
        arr.forEach(elem => {
          elem.classList.remove('card__bookmark-icon_authorized');
          elem.classList.add('card__bookmark-icon_not-authorized');
        });
      })
  }

  addListenerDeleteCard(item) {
    item.addEventListener('click', this.deleteCard)
  }
  _removeListener(card) {
    card.removeEventListener('click', this.deleteCard)
  }
}
