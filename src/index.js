import { Popup } from './Scripts/components/Popup'
import { MainApi } from './Scripts/api/MainApi'
import { Form } from './Scripts/components/Form'
import { Header } from './Scripts/components/Header'

import {showMobileMenu, mobileMenuButton} from './Scripts/utils/utils'

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
const articleItems = document.querySelectorAll('.saved-articles');
const userItems = document.querySelectorAll('.user-item');
const authItems = document.querySelectorAll('.auth-item');

const API_URL = 'http://localhost:3000';



const popupSignin = new Popup(signinPopup, authPopupCloseButton, authButton);
popupSignin.addListeners();

const popupSignup = new Popup(signupPopup, regPopupCloseButton, regButton);
popupSignup.addListeners();

const popupReg = new Popup(regPopup, registeredPopupCloseButton, registeredButton)
popupReg.addListeners();

const mainApi = new MainApi(API_URL);

const header = new Header(mainApi, articleItems, authItems, userItems, showMobileMenu, mobileMenuButton);
header.render();
const headerRender = header.render;

const signinForm = new Form(formSignin, popupSignin, mainApi, undefined, headerRender);
signinForm.setListeners(formSignin, signinForm.signin);

const signupForm = new Form(formSignup, popupSignup, mainApi, popupReg);
signupForm.setListeners(formSignup, signupForm.signup);

