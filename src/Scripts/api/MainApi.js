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

  createArticle(articleLink, articleKeyword, articleTitle, articleText, articleDate, articleSource, articleImage,) {
    return fetch(`${this._url}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        link: articleLink,
        keyword: articleKeyword,
        title: articleTitle,
        text: articleText,
        date: articleDate,
        source: articleSource,
        image: articleImage
      })
    })
      .then((res) => this._handlePromise(res))
  }

  removeArticle(articleId) {
    return fetch(`${this._url}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      })
      .then((res) => this._handlePromise(res))
  }



}