'use strict';

// Задание 1.

let str = prompt('Введите любые буквы...');



function chekString(str, countChar) {
  if (isNaN(str)) {    
    countChar(str);    
  } else {console.log('Аргумент не строка!');}  
  }


  function countChar(str) {
    str = str.trim();
    if (+str.length > 30) {
      console.log(str.substring(0, 30) + '...');
  } else {
    console.log(typeof(str), str);
  }

}



chekString(str, countChar);







