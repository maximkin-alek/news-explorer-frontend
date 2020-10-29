import { Popup } from '../../Scripts/components/Popup'
import { MainApi } from '../../Scripts/api/MainApi'
import { Form } from '../../Scripts/components/Form'
import { Header } from '../../Scripts/components/Header'
import { FormValidator } from '../../Scripts/utils/FormValidator'
import { NewsApi } from '../../Scripts/api/NewsApi'
import { NewsCard } from '../../Scripts/components/NewsCard'
import { NewsForm } from '../../Scripts/components/newsForm'
import { NewsCardList } from '../../Scripts/components/NewsCardList'

import { showMobileMenu, mobileMenuButton, splitResults, formatArticleDate} from '../../Scripts/utils/utils'
import { errorMessages, API_KEY, API_URL, BASE_URL_NEWS, cardMurkup,signinPopup, signupPopup, regPopup, authButtons, regButton, buttonMore, registeredButton, authPopupCloseButton, regPopupCloseButton,
  registeredPopupCloseButton, formSignin, formSignup, formNews, articleItems, userItems, authItems, singinApiErr, singupApiErr, resultsGroup,
  resultsSection, noResults, searchError, logoutIcon, headerItem, headerLogo } from '../../Scripts/constants/constants'
import '../../pages/saved-news.css';

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
header.setListeners('white', headerItem, headerLogo)
header.render();
const headerRender = header.render;