const errorMessages = {
  empty: 'Это обязательное поле',
  shortOrLong: 'Должно быть от 2 до 30 символов',
  notUrl: 'Здесь должна быть ссылка'
};
const API_KEY = 'e5cac72062c44e969096f918472a98c5';
const API_URL = 'http://localhost:3000';
const BASE_URL_NEWS = 'http://newsapi.org/v2/top-headlines';
const cardMurkup = `<a class="card" href="" target="_blank">
<img
  class="card__image"
  alt="Иллюстрация новостной статьи"
  src=""/>
<div class="card__bookmark-icon"></div>
<p class="card__date"></p>
<p class="card__title"></p>
<p class="card__text"></p>
<p class="card__source"></p>
</a>`

export { errorMessages, API_KEY, API_URL, BASE_URL_NEWS, cardMurkup }