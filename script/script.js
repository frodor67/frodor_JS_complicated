'use strict';

// Задание 1.

let lang = prompt('Какой язык Ru ли En? ');

const ru = 'Ru';
const en = 'En';

const nameDayRu = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const nameDayEn = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];


// Решение через if
if (lang === 'Ru') {
  console.log(nameDayRu);
}else if (lang === 'En') {
  console.log(nameDayEn);
}else {
  console.log('Язык выбран не верно');
}

//Решение через switch-case

switch (lang) {
  case 'Ru':
    console.log(nameDayRu);
    break;
  case 'En':
    console.log(nameDayEn);
    break;
  default:
    console.log('Язык выбран не верно');
    break;
}

//Решение через многомерные массивы

const langDayArr = [];

langDayArr[ru] = nameDayRu;
langDayArr[en] = nameDayEn;

console.log(langDayArr[lang]);


//Задание 2.

let namePerson = prompt('Как твое имя?');

let msg = namePerson === 'Артем' ? 'Директор' :
  namePerson === 'Максим' ? 'Преподаватель' : 'Студент';

console.log(msg);


