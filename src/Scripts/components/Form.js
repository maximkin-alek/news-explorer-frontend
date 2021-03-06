export class Form {
  constructor(form, popup, api, headerRender, apiError, regPopup, resultsGroup, renderIcon) {
    this._form = form;
    this._popup = popup;
    this._api = api;
    this._regPopup = regPopup;
    this.headerRender = headerRender;
    this._apiError = apiError;
    this._resultsGroup = resultsGroup;
    this._renderIcon = renderIcon;

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
        this.headerRender('white');
        const icons = this._resultsGroup.querySelectorAll('.card__bookmark-icon');
        this._renderIcon(icons);
      })
      .catch((err) => {
        if (err.statusCode === 400) {
          this._apiError.textContent = '';
          this._apiError.textContent = err.validation.body.message;
        }
        if (err.status === 429) {
          this._apiError.textContent = '';
          this._apiError.textContent = 'Cлишком много запросов, повторите попытку позднее';
        }
        else {
          this._apiError.textContent = err.message;
        }

      });
  }

  signup(event) {
    event.preventDefault();

    const email = this._form.querySelector('#signup-email');
    const password = this._form.querySelector('#signup-password');
    const name = this._form.querySelector('#signup-name');


    this._api.signup(name.value, email.value, password.value)
      .then(() => {
        this._form.reset();
        this._popup.close();
        this._regPopup.open();
      })
      .catch((err) => {
        if (err.statusCode === 400) {
          this._apiError.textContent = '';
          this._apiError.textContent = err.validation.body.message;
        } else {
          this._apiError.textContent = err.message;
        }
      })
  }

  setListeners(form, action) {
    form.addEventListener('submit', action);
  };
}
