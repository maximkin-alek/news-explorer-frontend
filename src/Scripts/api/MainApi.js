export class MainApi {
  constructor(url) {
    this._url = url;
  }


  _handlePromise(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  signup() { }

  signin(userEmail, userPassword) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      })
    })
      .then((res) => this._handlePromise(res))
  }

  getUserData() { }

  getArticles() { }

  createArticle() { }

  removeArticle() { }



}