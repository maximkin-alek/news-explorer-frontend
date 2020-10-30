export class Articles {
  constructor(articlesParams) {
    this._api = articlesParams.mainApi;
    this._createCard = articlesParams.createNewCard;
    this._articleMurkup = articlesParams.articleMurkup;
    this._renderSavedArticles = articlesParams.renderSavedArticles;
    this._showSavedArticlesInfo = articlesParams.showSavedArticlesInfo;
    this._savedArticlesContainer = articlesParams.savedArticlesContainer;
    this._addListenerDeleteCard = articlesParams.addListenerDeleteCard;

    this._keywordsArr = [];
    this._savedArticles = [];

    this.showArticles = this.showArticles.bind(this);
    this.renderArticlesInfo = this.renderArticlesInfo.bind(this);
    this._renderKeywords = this.renderKeywords.bind(this);
  }

  showArticles() {
    this._api.getArticles().then((data) => {

      data.data.forEach((elem) => {
        const savedCard = this._createCard(elem, this._articleMurkup);
        const deleteIcon = savedCard.querySelector('.card__delete-icon');
        this._addListenerDeleteCard(deleteIcon);
        this._savedArticles.push(savedCard);
        this._keywordsArr.push(elem.keyword);
      });
      this.renderArticlesInfo();

      this._renderSavedArticles(this._savedArticlesContainer, this._savedArticles);
    })
      .catch(err => console.log(err));
  }

  renderArticlesInfo() {
    this._api.getUserData()
      .then((data) => {

        const userName = data.name;
        const articlesQuantity = this._savedArticles.length;

        // копия для преобразования в строку и обратно
        let articlesLength = articlesQuantity;
        // взять последнюю цифру
        if (articlesLength >21) {
          articlesLength = articlesLength.toString();
          articlesLength = articlesLength[articlesLength.length - 1];
          articlesLength = Number(articlesLength);
        }

        let variantsOfWords = ''
        if (articlesLength === 1) {
          variantsOfWords = 'сохраненная статья';
        }
        if (articlesLength >= 2 && articlesLength <= 4) {
          variantsOfWords = 'сохраненные статьи';
        }
        if ((articlesLength >= 5 && articlesLength < 20) || articlesLength === 0) {
          variantsOfWords = 'сохраненных статей';
        }

        let words = this._renderKeywords();

        this._showSavedArticlesInfo(userName, articlesQuantity, variantsOfWords, words[0], words[1], words[2])
      })
      .catch(err => console.log(err));
  }

  renderKeywords() {
    // создание объекта с количеством упоминания ключевых слов
    const keywordsObj = this._keywordsArr.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    // массив из объекта, упорядочен по популярности ключевого слова
    const keysSorted = Object.keys(keywordsObj).sort(function (a, b) { return keywordsObj[b] - keywordsObj[a] });
    // Страховка от undefined
    let keywordOne = '';
    let keywordTwo = '';
    let keywordThree = '';

    // Если ключевых слов больше 3
    if (keysSorted.length > 3) {
      keywordOne = `${keysSorted[0]},`;
      keywordTwo = `${keysSorted[1]}`;
      keywordThree = `и ${(keysSorted.length - 2)} другим`;
    }
    // если ключевых слов меньше илои равно трём
    if (keysSorted.length <= 3) {
      keywordOne = `${keysSorted[0]},`;
      keywordTwo = (keysSorted[1] !== undefined) ? `${keysSorted[1]},` : '';
      keywordThree = (keysSorted[2] !== undefined) ? `и ${keysSorted[2]}` : '';
    }
    if (keysSorted.length === 0) {
      keywordOne = 'У Вас ещё нет сохранённых статей';
    }
    return [keywordOne, keywordTwo, keywordThree];
  }


}
