import { Popup } from './Scripts/components/Popup'
import { MainApi } from './Scripts/api/MainApi'
import { Form } from './Scripts/components/Form'
import { Header } from './Scripts/components/Header'
import { FormValidator } from './Scripts/utils/FormValidator'
import { NewsApi } from './Scripts/api/NewsApi'
import { NewsCard } from './Scripts/components/NewsCard'
import { NewsForm } from './Scripts/components/newsForm'
import { NewsCardList } from './Scripts/components/NewsCardList'

import { showMobileMenu, mobileMenuButton, splitResults, formatArticleDate} from './Scripts/utils/utils'
import { errorMessages, API_KEY, API_URL, BASE_URL_NEWS, cardMurkup,signinPopup, signupPopup, regPopup, authButtons, regButton, buttonMore, registeredButton, authPopupCloseButton, regPopupCloseButton,
  registeredPopupCloseButton, formSignin, formSignup, formNews, articleItems, userItems, authItems, singinApiErr, singupApiErr, resultsGroup,
  resultsSection, noResults, searchError } from './Scripts/constants/constants'
import './pages/index.css';

const popupSignin = new Popup(signinPopup, authButtons);
popupSignin.addListenersOpen();
popupSignin.addlistenerClose(authPopupCloseButton);

const popupSignup = new Popup(signupPopup, regButton);
popupSignup.addListenersOpen();
popupSignup.addlistenerClose(regPopupCloseButton);

const popupReg = new Popup(regPopup, registeredButton)
popupReg.addlistenerClose(registeredPopupCloseButton);

const mainApi = new MainApi(API_URL);

const header = new Header(mainApi, articleItems, authItems, userItems, showMobileMenu, mobileMenuButton);
header.render('white');
header.setListeners();
const headerRender = header.render;

const newsCard = new NewsCard(cardMurkup, mainApi, formatArticleDate);
const renderLikeIcon = newsCard.renderIcon;

const signinForm = new Form(formSignin, popupSignin, mainApi, headerRender, singinApiErr);
signinForm.setListeners(formSignin, signinForm.signin);

const signupForm = new Form(formSignup, popupSignup, mainApi, undefined, singupApiErr, popupReg, );
signupForm.setListeners(formSignup, signupForm.signup);

const newsApi = new NewsApi(API_KEY, '2020-10-20', '2020-10-27', BASE_URL_NEWS);

const newsCardList = new NewsCardList(splitResults, resultsGroup, renderLikeIcon, searchError, buttonMore);
const renderResultsSearch = newsCardList.renderResults;
const renderNewsError = newsCardList.renderError;
const renderLoader = newsCardList.renderLoader;

new FormValidator(formSignin, errorMessages, authPopupCloseButton)
const signupFormValidator = new FormValidator(formSignup, errorMessages, regPopupCloseButton)
const NewsFormValidator = signupFormValidator.addNewsFormValidator;

const newsForm = new NewsForm(formNews, newsApi, newsCard, noResults, resultsSection, renderResultsSearch, renderNewsError, renderLoader, NewsFormValidator);
newsForm.addListener();




