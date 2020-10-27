export class NewsCard {
  constructor(cardMurkup, api) {
    this._cardMurkup = cardMurkup;
    this._api = api;

    this.create = this.create.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }
  create(obj) {
    const elem = document.createElement('div');
    elem.insertAdjacentHTML('afterbegin', this._cardMurkup);
    const murkup = elem.firstElementChild;
    murkup.href = obj.url;
    murkup.querySelector('.card__image').src = obj.urlToImage;
    murkup.querySelector('.card__date').textContent = obj.publishedAt;
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


// author: "Lenta"
// content: "100
// description: "Более 100 сотрудников Большого театра заразились коронавирусом. Директор театра Владимир Урин заявил, что болеют 124 человека, что составляет более трех процентов от численности всего рабочего коллектива. Несмотря на это, с сентября была отменена только одна …"
// publishedAt: "2020-10-27T15:44:36Z"
// source: { id: "lenta", name: "Lenta" }
// title: "Более 100 сотрудников Большого театра заразились коронавирусом"
// url: "https://lenta.ru/news/2020/10/27/bolshoi/"
// urlToImage: "https://icdn.lenta.ru/images/2020/10/27/18/20201027182848859/share_1a8273bb0e019dd91b4dbce6c987