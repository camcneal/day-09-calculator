document.querySelector('.addition').onclick = function () {
// get value 1 from input .value1
var value1 = Number(document.querySelector('.value1').value);
// console.dir(value1);
// get value 2 from input .value2
var value2 = Number(document.querySelector('.value2').value);
// console.dir(value2);
// var text = document.querySelector('value2');
var sum = value1 + value2;

document.querySelector('.result').value = sum;

console.log(sum);
// store the answer which is add value 1 and value 2
var result = sum;
// var text = document.querySelector('result');

// put the answer in .result

};

// var button = document.querySelector('.addition');
// console.dir(button);
//
// var text = document.querySelector('.value1');
// console.dir(text);
