'use strict';

// Задание 1.

let str = prompt('Введите любые буквы...');



function chekString(str) {
  if (!Number.isNaN(str)) {
    console.log('Аргумент не строка!');
    str = +str;
  } else {
    str = str.trim();
  }

  if (+str.length > 30) {
    console.log(str.substring(0, 30) + '...');
  } else {
    console.log(typeof(str), str);
  }
}

chekString(str);







