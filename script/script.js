
let num = 266219;

let array = num.toString().split('');

console.log(array);

res = array.reduce(function(a, b){
  return a * b;
});

console.log(res);

let resCube = res ** 3;

console.log(resCube);

console.log(resCube.toString().substr(0, 2));