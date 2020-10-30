export class NewsApi {
  constructor(API_KEY, BASE_URL_NEWS, renderDates) {

    this._API_KEY = API_KEY;
    this._BASE_URL_NEWS = BASE_URL_NEWS;
    this._renderDates = renderDates;

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
    const dates = this._renderDates();
    const nowDate = dates[0];
    const weekAgoDate = dates[1];
    return fetch(`${this._BASE_URL_NEWS}?q=${keyWord}&from=${nowDate}&to=${weekAgoDate}&sortBy=popularity&language
=ru&pageSize=100&apiKey=${this._API_KEY}`)
      .then((res) => this._handlePromise(res))
  }
}