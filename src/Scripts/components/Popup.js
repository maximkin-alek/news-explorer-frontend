export class Popup {
  constructor(popup, listenerOpen) {
    this.popup = popup;
    this._listenerOpen = listenerOpen;

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.addListenersOpen = this.addListenersOpen.bind(this);
    this._closeAll = this._closeAll.bind(this);
    this.addlistenerClose = this.addlistenerClose.bind(this);

  }

  _closeAll() {
    document.querySelectorAll('.popup').forEach(element => {
      element.classList.remove('popup_is-opened');
    });
  }

  open() {
    this._closeAll();
    this.popup.classList.add('popup_is-opened');
  }

  close() {
    this.popup.classList.remove('popup_is-opened');
  }

  addListenersOpen() {

    this._listenerOpen.forEach(element => {
      element.addEventListener('click', this.open);
    });
  }

  addlistenerClose(button) {
    button.addEventListener('click', this.close);
  }
}
