export class NewsCard {
  constructor(cardMurkup, api, formatArticleDate) {
    this._cardMurkup = cardMurkup;
    this._api = api;
    this._formatArticleDate = formatArticleDate;

    this.create = this.create.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }
  create(obj, keyword) {
    const elem = document.createElement('div');
    elem.insertAdjacentHTML('afterbegin', this._cardMurkup);
    const murkup = elem.firstElementChild;
    murkup.href = obj.url;
    murkup.dataset.keyword = keyword;

    murkup.querySelector('.card__image').src = (obj.urlToImage !== null) ? obj.urlToImage : 'https://m.seonews.ru/upload/iblock/db6/db63011ab8f84d0d905775eaae06301a.jpg';
    const cardDate = murkup.querySelector('.card__date');
    cardDate.dataset.date = obj.publishedAt;
    cardDate.textContent = this._formatArticleDate(obj.publishedAt);

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
          elem.addEventListener('click', ((event) => {

            event.preventDefault();

            if(event.target.classList.contains('card__bookmark-icon_liked')) {
              this._api.removeArticle(event.target.parentElement.id)
              .then((data) => {
                event.target.classList.remove('card__bookmark-icon_liked');
                console.log(data);
              })
              .catch((err) => {
                console.log(err);
              })
            } else {
              const articleLink = event.target.parentElement.href;
              const articleKeyword = event.target.parentElement.dataset.keyword;
              const articleTitle =  event.target.parentElement.querySelector('.card__title').textContent;
              const articleText =  event.target.parentElement.querySelector('.card__text').textContent;
              const articleDate =  event.target.parentElement.querySelector('.card__date').dataset.date;
              const articleSource =  event.target.parentElement.querySelector('.card__source').textContent;
              const articleImage =  event.target.parentElement.querySelector('.card__image').src;

              this._api.createArticle(articleLink, articleKeyword, articleTitle, articleText, articleDate, articleSource, articleImage)
              .then((data) => {
                event.target.classList.add('card__bookmark-icon_liked');
                event.target.parentElement.id = data.id;
              })
              .catch((err) => {
                console.log(err);
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
}
