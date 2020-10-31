{

}
const signinPopup = document.querySelector('.popup-signin');
const signupPopup = document.querySelector('.popup-signup');
const regPopup = document.querySelector('.popup-registered');
const authButtons = document.querySelectorAll('.button-auth');
const regButton = document.querySelectorAll('.button-reg');
const buttonMore = document.querySelector('.results__button');
const registeredButton = document.querySelectorAll('.popup-registered__button');
const authPopupCloseButton = document.querySelector('.popup-signin__close');
const regPopupCloseButton = document.querySelector('.popup-signup__close');
const registeredPopupCloseButton = document.querySelector('.popup-registered__close');
const formSignin = document.querySelector('#form-signin');
const formSignup = document.querySelector('#form-signup');
const formNews = document.querySelector('#form-news');
const articleItems = document.querySelectorAll('.saved-articles');
const userItems = document.querySelectorAll('.user-item');
const authItems = document.querySelectorAll('.auth-item');
const singinApiErr = document.querySelector('#signin-api-error');
const singupApiErr = document.querySelector('#signup-api-error');
const resultsGroup = document.querySelector('.results__group');
const resultsSection = document.querySelector('.results');
const noResults = document.querySelector('.no-result');
const searchError = document.querySelector('#error-news-input');
const logoutIcon = document.querySelector('.header__logout-icon');
const headerItem = document.querySelector('.header');
const headerLogo = document.querySelector('.header__text');
const savedArticlesContainer = document.querySelector('.articles__card-group');
const savedArticlesDescription = document.querySelector('.articles__subtitle');
const savedArticlesKeywords = document.querySelector('.articles__keywords');
const firstKeyword = document.querySelector('#keyword-1');
const secondKeyword = document.querySelector('#keyword-2');
const thirdKeyword = document.querySelector('#keyword-3');

const errorMessages = {
  empty: 'Это обязательное поле',
  shortOrLong: 'Должно быть от 2 до 30 символов',
  notUrl: 'Здесь должна быть ссылка',
  keyword: 'Нужно ввести ключевое слово',
  shortReq: 'В запросе должно быть не менее 2 символов'
};
const API_KEY = '5b480448dcfa4586a1ace0189de62d95';
const API_URL = 'http://localhost:3000';
// https://api.alex-newsexp.tk
// 'http://localhost:3000'
const BASE_URL_NEWS = 'https://nomoreparties.co/news/v2/everything';
const cardMurkup = `<a class="card" href="" target="_blank">
<img
  class="card__image"
  alt="Иллюстрация новостной статьи"
  src=""/>
<div class="card__bookmark-icon"></div>
<p class="card__date"></p>
<p class="card__title"></p>
<p class="card__text"></p>
<p class="card__source"></p>
</a>`;
const articleMurkup = `<a class="card" href="" target="_blank">
<img
  class="card__image"
  alt="Иллюстрация новостной статьи"
  src=""
/>
<p class="card__theme"></p>
<div class="card__delete-icon"></div>
<p class="card__date"></p>
<p class="card__title"></p>
<p class="card__text"></p>
<p class="card__source"></p>
</a>`;


export {
  errorMessages, API_KEY, API_URL, BASE_URL_NEWS, cardMurkup, signinPopup, signupPopup, regPopup, authButtons, regButton, buttonMore, registeredButton, authPopupCloseButton, regPopupCloseButton,
  registeredPopupCloseButton, formSignin, formSignup, formNews, articleItems, userItems, authItems, singinApiErr, singupApiErr, resultsGroup,
  resultsSection, noResults, searchError, logoutIcon, headerItem, headerLogo, articleMurkup, savedArticlesContainer, savedArticlesDescription, firstKeyword, secondKeyword, thirdKeyword, savedArticlesKeywords
}