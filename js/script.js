/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let adv = document.querySelectorAll('.promo__adv img');

adv.forEach(item => {
    item.remove();
});

// document.querySelector('.promo__adv').remove();
let gengre = document.querySelector('.promo__genre').textContent ='Драма';

let bgi = document.querySelector('.promo__bg');
bgi.style.backgroundImage = 'url("../img/bg.jpg")';
//  4
let  listFilm = document.querySelector('.promo__interactive-list');

movieDB.movies.sort();
listFilm.innerHTML = '';

movieDB.movies.forEach((item, i) =>{
    listFilm.innerHTML += `
    <li class="promo__interactive-item"> ${i+1} ${item } 
        <div class="delete"></div>
    </li>
    
    `;
    console.log(item , i);
}); 
