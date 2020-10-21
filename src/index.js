import { Popup } from './Scripts/components/Popup'
import { MainApi } from './Scripts/api/MainApi'
import { Form } from './Scripts/components/Form'

import './pages/index.css';

const signinPopup = document.querySelector('.popup-signin');
const signupPopup = document.querySelector('.popup-signup');
const authButton = document.querySelectorAll('.button-auth');
const regButton = document.querySelectorAll('.button-reg');
const authPopupCloseButton = document.querySelector('.popup-signin__close');
const regPopupCloseButton = document.querySelector('.popup-signup__close');
const formSignin = document.querySelector('#form-signin');

const API_URL = 'http://localhost:3000';

const popupSignin = new Popup(signinPopup, authPopupCloseButton, authButton);
popupSignin.addListeners();

const popupSignup = new Popup(signupPopup, regPopupCloseButton, regButton);
popupSignup.addListeners();

const mainApi = new MainApi(API_URL);
mainApi.signin('avtor4@mail.ru','12345678');

const signinForm = new Form(formSignin, popupSignin, mainApi);
signinForm.setListeners();