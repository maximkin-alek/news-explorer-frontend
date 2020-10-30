import { Popup } from '../../Scripts/components/Popup'
import { MainApi } from '../../Scripts/api/MainApi'
import { Header } from '../../Scripts/components/Header'
import { NewsCard } from '../../Scripts/components/NewsCard'
import { NewsForm } from '../../Scripts/components/newsForm'
import { NewsCardList } from '../../Scripts/components/NewsCardList'
import { Articles } from '../../Scripts/components/Articles'

import { showMobileMenu, mobileMenuButton, spliResults, formatArticleDate } from '../../Scripts/utils/utils'
import {
  errorMessages, API_KEY, API_URL, BASE_URL_NEWS, cardMurkup, signinPopup, signupPopup, regPopup, authButtons, regButton, buttonMore, registeredButton, authPopupCloseButton, regPopupCloseButton,
  registeredPopupCloseButton, formSignin, formSignup, formNews, articleItems, userItems, authItems, singinApiErr, singupApiErr, resultsGroup,
  resultsSection, noResults, searchError, logoutIcon, headerItem, headerLogo, articleMurkup, savedArticlesContainer, savedArticlesDescription, firstKeyword, secondKeyword, thirdKeyword, savedArticlesKeywords
} from '../../Scripts/constants/constants'
import '../../pages/saved-news.css';

const mainApi = new MainApi(API_URL);
const headerParams = {mainApi, articleItems, authItems, userItems, showMobileMenu, mobileMenuButton}
const header = new Header(headerParams);
header.setListeners('white', headerItem, headerLogo)
header.render();


const newsCard = new NewsCard(mainApi, formatArticleDate);
const addListenerDeleteCard = newsCard.addListenerDeleteCard;
const createNewCard = newsCard.create;

const newsCardList = new NewsCardList({ savedArticlesDescription, firstKeyword, secondKeyword, thirdKeyword });
const renderSavedArticles = newsCardList.renderSavedArticles
const showSavedArticlesInfo = newsCardList.showSavedArticlesInfo;



const articlesParams =  { mainApi, articleMurkup, renderSavedArticles, showSavedArticlesInfo, savedArticlesContainer, addListenerDeleteCard, createNewCard}

const savedArticles = new Articles(articlesParams);
savedArticles.showArticles();