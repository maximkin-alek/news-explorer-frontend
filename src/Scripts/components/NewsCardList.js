export class NewsCardList {
  constructor(splitResults, resultsGroup, renderIcon, searchError) {
    this._splitResults = splitResults;
    this._resultsGroup = resultsGroup;
    this._renderIcon = renderIcon;
    this._searchError = searchError;

    this.renderResults = this.renderResults.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
  }
  renderResults(cards) {
    const shownResults = [];
    this._splitResults(cards, shownResults);


    shownResults.forEach(item => {
      this._resultsGroup.appendChild(item);
      const icon = this._resultsGroup.querySelectorAll('.card__bookmark-icon');
      this._renderIcon(icon);
    });
   }

  renderLoader(IsLoad) {
    const preloader = document.querySelector('.preloader')
    if(IsLoad) {
      preloader.classList.add('preloader_open');
    } else {
      preloader.classList.remove('preloader_open');
    }
   }

  renderError(err) {
    this._searchError.textContent = err.message;
   }
}