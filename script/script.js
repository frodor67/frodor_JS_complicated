'use strict';

// Задание 1.

let str = prompt('Введите любый буквы...');

function chekString(str) {
  if (typeof(str) !== 'string') {
    console.log('Аргумент не строка!');
  } else {
    str = str.trim();
  }

  if (+str.length > 30) {
    console.log(str.substring(0, 30) + '...');
  }
}

chekString(str);







