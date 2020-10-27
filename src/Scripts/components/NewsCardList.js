export class NewsCardList {
  constructor(splitResults, resultsGroup) {
    this._splitResults = splitResults;
    this._resultsGroup = resultsGroup;

    this.renderResults = this.renderResults.bind(this);
  }
  renderResults(cards) {
    const shownResults = [];
    this._splitResults(cards, shownResults);
    shownResults.forEach(item => {
      this._resultsGroup.appendChild(item);
    });
   }

  renderLoader() { }

  renderError(err) { }
}