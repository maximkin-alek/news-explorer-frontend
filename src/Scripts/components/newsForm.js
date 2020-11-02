export class NewsForm {
  constructor(newsFormParams) {
    this._form = newsFormParams.formNews;
    this._api = newsFormParams.newsApi;
    this._newsCard = newsFormParams.newsCard;
    this._noResults = newsFormParams.noResults;
    this._resultsSection = newsFormParams.resultsSection;
    this._renderResultsSearch = newsFormParams.renderResultsSearch;
    this._renderError = newsFormParams.renderNewsError;
    this._renderLoader = newsFormParams.renderLoader;
    this._NewsFormValidator = newsFormParams.NewsFormValidator;
    this.cardMurkup = newsFormParams.cardMurkup;

    this.findNews = this.findNews.bind(this);
    this._removeAllNews = this._removeAllNews.bind(this);
  }

  findNews(event) {
    event.preventDefault();
    this._resultsSection.classList.remove('results_isVisible');

    if (this._NewsFormValidator(this._form)) {

      this._renderLoader(true);
      const keyWord = this._form.querySelector('.search-form__input');
      const saveKeyWord = keyWord.value;
      this._api.getNews(saveKeyWord).then((data) => {

        this._form.reset();

        if (data.articles.length === 0) {
          this._noResults.classList.add('no-result_isVisible');
          this._resultsSection.classList.remove('results_isVisible');
        } else {

          this._removeAllNews();
          this._noResults.classList.remove('no-result_isVisible');
          this._resultsSection.classList.add('results_isVisible');

          const results = [];

          data.articles.forEach((elem) => {
            const card = this._newsCard.create(elem, this.cardMurkup, saveKeyWord);
            results.push(card);
          });

          this._renderResultsSearch(results);
        }
      })
        .catch((err) => {
          if (err.statusCode === 500) {
            err.message = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          }
          this._renderError(err);
        })
        .finally(() => {
          this._renderLoader(false);
        })
    } else { return }
  }

  _removeAllNews() {
    this._resultsSection.querySelectorAll('.card').forEach(card => {
      card.remove();
    })
  }

  addListener() {
    this._form.addEventListener('submit', this.findNews);
  }
}