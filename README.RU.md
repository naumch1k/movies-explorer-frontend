# Учебный проект: "Movies Explorer"

*Read this in other languages:* [EN](https://github.com/naumch1k/movies-explorer-frontend/blob/level-3/README.md)

фронтенд учебного проекта в [Yandex Практикуме](https://praktikum.yandex.ru/web/ "Курс Веб-разработчик")

[Ссылка на макет](https://www.figma.com/file/c4kBXWfzL7N4MSpXbHk6u9/YP-Diploma?node-id=891%3A3857)

* Адрес размещения фронтенда: [https://naumch1k.students.nomoredomains.club](https://naumch1k.students.nomoredomains.club)
* Адрес домена сервера: [https://api.naumch1k.students.nomoredomains.club](https://api.naumch1k.students.nomoredomains.club)
* Публичный IP: *84.201.133.219*

Если совсем лень регистрироваться  
логин: *test@test.com*  
пароль: *testtest*

## Описание проекта
интерактивная страница, где пользователи могут искать фильмы и сохранять понравившиеся на страницу 'Сохраненные'

### На данном этапе реализовано
* авторизация и регистрация пользователей
* редактирование данных профиля пользователя
* поиск фильмов по ключевому слову
* фильтрация короткометражек
* сохранение / удаление понравившихся фильмов

## Технологии, которые применялись в проекте
JavaScript | React JS | CSS3 | БЭМ | адаптивная верстка

## Инструкция по установке

```bash
# Клонируем репозиторий
git clone https://github.com/naumch1k/movies-explorer-frontend.git
# Заходим в папку с проектом
cd movies-explorer-frontend
# Устанавливаем зависимости
npm i
```
Доступные скрипты:

`npm start`

> Запускает локальный сервер на [localhost:3000](http://localhost:3000)

`npm run build`

> Собирает проект в папку `build`


## Планы по доработке проекта
- [ ] добавить кпопку сброса поиска во вкладке с сохраненными фильмами
- [ ] настроить поиск фильмов по нескольким ключевым словам
- [ ] исправить мелкие ошибки (напр., если нажать на фильтр короткометражек до сабмита формы, появляется сообщение 'Ничего не найдено'
- [ ] рефакторинг кода