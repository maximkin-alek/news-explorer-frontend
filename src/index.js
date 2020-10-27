import { Popup } from './Scripts/components/Popup'
import { MainApi } from './Scripts/api/MainApi'
import { Form } from './Scripts/components/Form'
import { Header } from './Scripts/components/Header'
import { FormValidator } from './Scripts/utils/FormValidator'
import { NewsApi } from './Scripts/api/NewsApi'
import { NewsCard } from './Scripts/components/NewsCard'
import { NewsForm } from './Scripts/components/newsForm'
import { NewsCardList } from './Scripts/components/NewsCardList'

import { showMobileMenu, mobileMenuButton, splitResults } from './Scripts/utils/utils'
import { errorMessages, API_KEY, API_URL, BASE_URL_NEWS, cardMurkup } from './Scripts/constants/constants'


import './pages/index.css';

const signinPopup = document.querySelector('.popup-signin');
const signupPopup = document.querySelector('.popup-signup');
const regPopup = document.querySelector('.popup-registered');
const authButton = document.querySelectorAll('.button-auth');
const regButton = document.querySelectorAll('.button-reg');
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

const popupSignin = new Popup(signinPopup, authButton);
popupSignin.addListenersOpen();
popupSignin.addlistenerClose(authPopupCloseButton);

const popupSignup = new Popup(signupPopup, regButton);
popupSignup.addListenersOpen();
popupSignup.addlistenerClose(regPopupCloseButton);

const popupReg = new Popup(regPopup, registeredButton)
popupReg.addlistenerClose(registeredPopupCloseButton);

const mainApi = new MainApi(API_URL);

const header = new Header(mainApi, articleItems, authItems, userItems, showMobileMenu, mobileMenuButton);
header.render();
const headerRender = header.render;

const newsCard = new NewsCard(cardMurkup, mainApi);
const renderLikeIcon = newsCard.renderIcon;

const signinForm = new Form(formSignin, popupSignin, mainApi, headerRender, singinApiErr, renderLikeIcon);
signinForm.setListeners(formSignin, signinForm.signin);

const signupForm = new Form(formSignup, popupSignup, mainApi, undefined, singupApiErr, popupReg, );
signupForm.setListeners(formSignup, signupForm.signup);

const newsApi = new NewsApi(API_KEY, '2020-10-20', '2020-10-27', BASE_URL_NEWS);

const newsCardList = new NewsCardList(splitResults, resultsGroup);
const renderResultsSearch = newsCardList.renderResults;


const newsForm = new NewsForm(formNews, newsApi, newsCard, noResults, resultsSection, renderResultsSearch);
newsForm.addListener();



new FormValidator(formSignin, errorMessages, authPopupCloseButton)
new FormValidator(formSignup, errorMessages, regPopupCloseButton)

