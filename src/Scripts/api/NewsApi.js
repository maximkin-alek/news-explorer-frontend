export class NewsApi {
  constructor(API_KEY, dateFrom, dateTo, BASE_URL_NEWS) {

    this._API_KEY = API_KEY;
    this._dateFrom = dateFrom;
    this._dateTo = dateTo;
    this._BASE_URL_NEWS = BASE_URL_NEWS;

    this._handlePromise = this._handlePromise.bind(this);
    this.getNews = this.getNews.bind(this);
  }

  _handlePromise(res) {
    if (res.ok) {
      return res.json()
    }
    const json = res.json();
    return json.then(Promise.reject.bind(Promise))
  }

  getNews(keyWord) {
    return fetch(`${this._BASE_URL_NEWS}?q=${keyWord}&from=${this._dateFrom}&to=${this._dateTo}&sortBy=popularity&language
=ru&pageSize=100&apiKey=${this._API_KEY}`)
      .then((res) => this._handlePromise(res))
  }
}