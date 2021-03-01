'use strikt';

document.addEventListener('DOMContentLoaded', () => {
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
    let gengre = document.querySelector('.promo__genre').textContent = 'Драма';
    let bgi = document.querySelector('.promo__bg');
    let listFilm = document.querySelector('.promo__interactive-list');





    // Работа с формой
    const addForm = document.querySelector('form.add'),
        btnAddFilm = addForm.querySelector('button'),
        inputAdd = addForm.querySelector('input'),
        checkboxFilm = addForm.querySelector('[type="checkbox"]');
    let newFilm = inputAdd.value;

    function makeChanges() {
        // Изменение BGI 
        bgi.style.backgroundImage = 'url("../img/bg.jpg")';
        // Удаление рекламнных банеров
        adv.forEach(item => {
            item.remove();
        });
    }
    makeChanges();

    function sortArr(array) {
        array.sort();
    }
    sortArr(movieDB.movies);



    // Добовление Фильмов
    function createNewFilm(film, parent) {
        parent.innerHTML = '';
        parent.forEach((item, i) => {
            film.innerHTML += `
        <li class="promo__interactive-item"> ${i+1} ${item } 
            <div class="delete"></div>
        </li>
        `;
        });



        if (addForm.querySelector('[type="checkbox"]').checked == true) {
            console.log('Мы добавили любимый фильм');
        }
        else{
            console.log('Вам не понравился этот фильм?'); 
        }


        inputAdd.value = '';
    }

    // Удаление длинных строк 
    function sliceString(str) {
        str = addForm.querySelector('input').value;
        if (str.length > 21) {
            str = str.slice(0, 22) + '...';
       
            return str;
       
 
        } else {
            str = addForm.querySelector('input').value;
          
            return str;
        }

    }

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Обрезание строки
        newFilm = sliceString(newFilm);
        
        // Добавление Фильмов в массив
        if (inputAdd.value != '') {
            listFilm.innerHTML = '';
            inputAdd.style.border = '1px solid green';
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createNewFilm(listFilm, movieDB.movies);
        } else {
            inputAdd.style.border = '1px solid red';
        }


        // Удаление объектов

        const deleteItem = document.querySelectorAll('.delete');

        deleteItem.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.target.parentNode.remove();

            });
        });



    });





});