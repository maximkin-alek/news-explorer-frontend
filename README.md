# **news-explorer-frontend**
Версия 0.9.0

## О проекте:
Учебный проект, представляет собой сервис поиска новостей по запросу, сохранение выбранных новостных карточек в личном кабинете. 
Основной стек: HTML, CSS, JS, Webpack.


## Основной функционал: 
- Поиск новостей через форму.
- Вывод новостных карточек по три с помощью кнопки "показать ещё".
- Изменение внешнего вида и функционала иконки избранных статей в зависимотри от статуса авторизации.
- Добавление/удаление новости в личный кабинет с главной страницы, удаление новостной карточки со страницы с сохранёнными статьями.
- Отображение на второй странице количества сохранённых статей и ключевых слов поиска(отсортированных по популярности).
- Регистрация нового пользователя с помощью формы.
- Авторизация (с помощью coockie).
- Динамическое изменение меню хедера в зависимости от статуса авторизации.
- Выход из профиля, редирект на основную страницу.



## Пакеты которые используются в сборках:
- [Babel CLI](https://babeljs.io/docs/en/babel-cli#docsNav)
- [Babel Core](https://babeljs.io/docs/en/babel-core)
- [Babel Preset Evnvironment](https://babeljs.io/docs/en/babel-preset-env#docsNav)
- [Сore JS](https://github.com/zloirock/core-js#readme)
- [PostCSS](https://postcss.org/)
- [Define plugin](https://webpack.js.org/plugins/define-plugin/)
- [Style loader](https://github.com/webpack-contrib/style-loader)
- [Optimize CSS assets](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
- [File loader](https://github.com/webpack-contrib/file-loader)
- [Image Webpack loader](https://www.npmjs.com/package/image-webpack-loader)

## Инструкции по запуску:
- Скачать или склонировать репозитори
- Установить зависимости при помощи npm - `npm i`
- Запустить в development режиме - `npm run dev`
- Запустить сборку production-билда - `npm run start`
- Разместить production-билд на github pages - `npm run deploy`

## Ссылка на github pages:
https://maximkin-alek.github.io/news-explorer-frontend/

## Ссылка на сайт:
https://alex-newsexp.tk/
