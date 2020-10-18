export class MainApi {
  constructor() {
  }

  _handlePromise(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  signup() { }

  signin() { }

  getUserData() { }

  getArticles() { }

  createArticle() { }

  removeArticle() { }



}