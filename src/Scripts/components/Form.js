export class Form {
  constructor(form, popup, api, regPopup, headerRender) {
    this._form = form;
    this._popup = popup;
    this._api = api;
    this._regPopup = regPopup;
    this.headerRender = headerRender;

    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
    this.setListeners = this.setListeners.bind(this);
  }

  signin(event) {
    event.preventDefault();

    const email = this._form.querySelector('#signin-email');
    const password = this._form.querySelector('#signin-password');

    this._api.signin(email.value, password.value)
      .then(() => {
        this._form.reset();
        this._popup.close();
        this.headerRender();
      })
      .catch((err) => {
        console.log(err)
      });
  }

  signup(event) {
    event.preventDefault();

    const email = this._form.querySelector('#signup-email');
    const password = this._form.querySelector('#signup-password');
    const name = this._form.querySelector('#signup-name');


    this._api.signup(name.value, email.value, password.value)
    .then((data) => {
      this._form.reset();
      this._popup.close();
      this._regPopup.open();
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  setListeners(form, action) {
    form.addEventListener('submit', action);
  };
}
