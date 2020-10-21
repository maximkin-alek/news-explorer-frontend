export class Form {
  constructor(form, popup, api) {
    this._form = form;
    this._popup = popup;
    this._api = api;

    this.signin = this.signin.bind(this);
    this.setListeners = this.setListeners.bind(this);
  }

  signin(event) {
    event.preventDefault();

    const email = this._form.querySelector('#signin-email');
    const password = this._form.querySelector('#signin-password');

    this._api.signin(email.value, password.value)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => { console.log(err.message) });
  }

  setListeners() {
    this._form.addEventListener('submit', this.signin);
  };
}
