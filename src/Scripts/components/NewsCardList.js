export class NewsCardList {
  constructor(mainCardListOptions) {
    this._splitResults = mainCardListOptions.splitResults;
    this._resultsGroup = mainCardListOptions.resultsGroup;
    this._renderIcon = mainCardListOptions.renderLikeIcon;
    this._searchError = mainCardListOptions.searchError;
    this._buttonMore = mainCardListOptions.buttonMore;
    this._savedArticlesDescription = mainCardListOptions.savedArticlesDescription;
    this._firstKeyword = mainCardListOptions.firstKeyword;
    this._secondKeyword = mainCardListOptions.secondKeyword;
    this._thirdKeyword = mainCardListOptions.thirdKeyword;

    this._cardsList = []

    this.renderResults = this.renderResults.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
    this.addshowMoreListener = this.addshowMoreListener.bind(this);
    this.renderSavedArticles = this.renderSavedArticles.bind(this);
    this.showSavedArticlesInfo = this.showSavedArticlesInfo.bind(this);
  }
  renderResults(cards) {
    this._cardsList = cards;
    if (cards.length <= 2) {
      this._buttonMore.classList.remove('button_isVisible')
    } else { this._buttonMore.classList.add('button_isVisible') }
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

  renderSavedArticles(container, articles) {
    articles.forEach(item => {
      container.appendChild(item);
    });
  }

  showSavedArticlesInfo(userName, articlesQuantity, variantsOfWords, keywordOne, keywordTwo, keywordThree) {
    this._savedArticlesDescription.textContent = `${userName}, у вас ${articlesQuantity} ${variantsOfWords}`;

    this._firstKeyword.textContent = keywordOne;
    this._secondKeyword.textContent = keywordTwo;
    this._thirdKeyword.textContent = keywordThree;
  }

  addshowMoreListener() {
    this._buttonMore.addEventListener('click', () => {
      this.renderResults(this._cardsList);
    });
  }

}