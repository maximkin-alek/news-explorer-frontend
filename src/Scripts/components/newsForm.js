export class NewsForm {
  constructor(form, api) {
    this._form = form;
    this._api = api;

    this.findNews = this.findNews.bind(this);
  }
  findNews() {
    this._api.getNews(keyWord).then((data) => {
      data.articles.forEach((elem) => {
        const card = newsCard.create(elem);
        const icon = card.querySelector('.card__bookmark-icon')
        newsCard.renderIcon(icon);
        resultsGroup.appendChild(card);
      })
    })
      .catch((err) => {
        console.log(err)
      });

  }
  addListener() {
    this._form.addEventListener('submit', this.findNews);
  }
}