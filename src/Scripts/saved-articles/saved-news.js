import { Popup } from '../../Scripts/components/Popup'
import { MainApi } from '../../Scripts/api/MainApi'
import { Header } from '../../Scripts/components/Header'
import { NewsCard } from '../../Scripts/components/NewsCard'
import { NewsForm } from '../../Scripts/components/newsForm'
import { NewsCardList } from '../../Scripts/components/NewsCardList'

import { showMobileMenu, mobileMenuButton, splitResults, formatArticleDate } from '../../Scripts/utils/utils'
import {
  errorMessages, API_KEY, API_URL, BASE_URL_NEWS, cardMurkup, signinPopup, signupPopup, regPopup, authButtons, regButton, buttonMore, registeredButton, authPopupCloseButton, regPopupCloseButton,
  registeredPopupCloseButton, formSignin, formSignup, formNews, articleItems, userItems, authItems, singinApiErr, singupApiErr, resultsGroup,
  resultsSection, noResults, searchError, logoutIcon, headerItem, headerLogo, articleMurkup, savedArticlesContainer, savedArticlesDescription, firstKeyword, secondKeyword, thirdKeyword, savedArticlesKeywords
} from '../../Scripts/constants/constants'
import '../../pages/saved-news.css';

const mainApi = new MainApi(API_URL);

const header = new Header(mainApi, articleItems, authItems, userItems, showMobileMenu, mobileMenuButton);
header.setListeners('white', headerItem, headerLogo)
header.render();


const newsCard = new NewsCard(mainApi, formatArticleDate);
const newsCardList = new NewsCardList({ savedArticlesDescription, firstKeyword, secondKeyword, thirdKeyword });
const addListener = newsCard.addListener

mainApi.getArticles().then((data) => {

  const savedArticles = [];
  const keywordsArr = [];

  data.data.forEach((elem) => {
    const savedCard = newsCard.create(elem, articleMurkup);
    const deleteIcon = savedCard.querySelector('.card__delete-icon');
    addListener(deleteIcon);
    savedArticles.push(savedCard);
    keywordsArr.push(elem.keyword);
  });
  // создание объекта с количеством упоминания ключевых слов
  const keywordsObj = keywordsArr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  console.log(keywordsObj);
  // массив из объекта, упорядочен по популярности ключевого слова
  const keysSorted = Object.keys(keywordsObj).sort(function (a, b) { return keywordsObj[b] - keywordsObj[a] });
  console.log(keysSorted);

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

  newsCardList.renderSavedArticles(savedArticlesContainer, savedArticles);

  const userName = header.userName;
  const articlesQuantity = savedArticles.length;

  // копия для преобразования в строку и обратно
  let articlesLength = articlesQuantity;
  if (articlesLength > 9) {
    articlesLength = articlesLength.toString();
    articlesLength = articlesLength[articlesLength.length - 1];
  }

  let variantsOfWords = ''
  if (articlesLength === 1) {
    variantsOfWords = 'сохраненная статья';
  }
  if (articlesLength >= 2 && articlesLength <= 4) {
    variantsOfWords = 'сохраненные статьи';
  }
  if ((articlesLength >= 5 && articlesLength < 10) || Number(articlesLength) === 0) {
    variantsOfWords = 'сохраненных статей';
  }


  newsCardList.showSavedArticlesInfo(userName, articlesQuantity, variantsOfWords, keywordOne, keywordTwo, keywordThree)
})
  .catch(err => console.log(err))
