export class NewsCardList {
  constructor(splitResults, resultsGroup, renderIcon, searchError, buttonMore) {
    this._splitResults = splitResults;
    this._resultsGroup = resultsGroup;
    this._renderIcon = renderIcon;
    this._searchError = searchError;
    this._buttonMore = buttonMore;

    this._cardsList = []

    this.renderResults = this.renderResults.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
    this.showMore = this.showMore.bind(this);
    this.showMore();
  }
  renderResults(cards) {
    this._cardsList = cards
    const shownResults = [];
    this._splitResults(cards, shownResults);

    shownResults.forEach(item => {
      this._resultsGroup.appendChild(item);
    });
    const icons = this._resultsGroup.querySelectorAll('.card__bookmark-icon');
    this._renderIcon(icons);
  }

  renderLoader(IsLoad) {
    const preloader = document.querySelector('.preloader')
    if (IsLoad) {
      preloader.classList.add('preloader_open');
    } else {
      preloader.classList.remove('preloader_open');
    }
  }

  renderError(err) {
    this._searchError.textContent = err.message;
  }

  showMore() {
    this._buttonMore.addEventListener('click', () => {
      if (this._cardsList.length > 0) {
        this._buttonMore.classList.add('button_isVisible');
        this.renderResults(this._cardsList);
      } else {
        this._buttonMore.classList.remove('button_isVisible');
      }
    });
  }

}