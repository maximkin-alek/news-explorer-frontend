export class NewsForm {
  constructor(form, api, newsCard, noResults, resultsSection, renderResultsSearch, renderError, renderLoader) {

    this._form = form;
    this._api = api;
    this._newsCard = newsCard;
    this._noResults = noResults;
    this._resultsSection = resultsSection;
    this._renderResultsSearch = renderResultsSearch;
    this._renderError = renderError;
    this._renderLoader = renderLoader;

    this.findNews = this.findNews.bind(this);
    this._removeAllNews = this._removeAllNews.bind(this);
  }

  findNews(event) {
    this._renderLoader(true);
    event.preventDefault();
    const keyWord = this._form.querySelector('.search-form__input');
    this._api.getNews(keyWord.value).then((data) => {

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
          const card = this._newsCard.create(elem);
          results.push(card);
        });

        this._renderResultsSearch(results);
      }
    })
      .catch((err) => {
        this._renderError(err);
      })
      .finally(() => {
        this._renderLoader(false);
      })

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