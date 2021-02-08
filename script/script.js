'use strict';

//Задание 1

let arr = ['123345', '23456', '543456', '46732', '56745', '546754', '34563'];

let getArr = function (arr) {

  for (let i = 0; i < arr.length; i++){

    if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
    console.log(arr[i]);
  } 
}
};

getArr(arr);



//Задание 2

let getPrime = function (n) {

  
nextNum:  for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++){

      if ( i % j === 0) {
        continue nextNum;
      }
    } 
    
    console.log(i + ' простое число, делители этого числа 1 и ' + i);        
      
  }
};
  
getPrime(100);






