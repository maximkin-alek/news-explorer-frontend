export class MainApi {
  constructor(url) {
    this._url = url;
  }


  _handlePromise(res) {
    if (res.ok) {
      return res.json()
    }
    const json = res.json();
    return json.then(Promise.reject.bind(Promise))
  }

  signup(userName, userEmail, userPassword) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      })
    })
      .then((res) => this._handlePromise(res))
  }


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

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
    })
      .then((res) => this._handlePromise(res))
  }

  getArticles() { }

  createArticle() { }

  removeArticle() { }



}