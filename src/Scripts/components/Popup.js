export class Popup {
  constructor(popup, listenerClose, listenerOpen,) {
    this.popup = popup;
    this._listenerOpen = listenerOpen;
    this._listenerClose = listenerClose;


    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this._closeAll = this._closeAll.bind(this);

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



  addListeners() {
    if (this._listenerOpen.length > 1) {
      this._listenerOpen.forEach(element => {
        element.addEventListener('click', this.open);
      });
    } else { this._listenerOpen.addEventListener('click', this.open); }

    this._listenerClose.addEventListener('click', this.close);
  }
}
