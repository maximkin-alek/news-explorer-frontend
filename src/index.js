import { Popup } from './Scripts/components/Popup'

import './pages/index.css';

const signinPopup = document.querySelector('.popup-signin');
const signupPopup = document.querySelector('.popup-signup');
const authButton = document.querySelectorAll('.button-auth');
const regButton = document.querySelectorAll('.button-reg');
const authPopupCloseButton = document.querySelector('.popup-signin__close');
const regPopupCloseButton = document.querySelector('.popup-signup__close');

const popupSignin = new Popup(signinPopup, authPopupCloseButton, authButton);
popupSignin.addListeners();

const popupSignup = new Popup(signupPopup, regPopupCloseButton, regButton);
popupSignup.addListeners();