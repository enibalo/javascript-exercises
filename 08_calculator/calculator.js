const add = function(a, b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array) {
  array = array.map((element)=> Number(element));
  return array.reduce((total, year) => total + year, 0);
};

const multiply = function(array) {
  return array.reduce( (total,year)=> total * year, 1);
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(num) {
  let answer = 1;
  for ( let i = 2; i <= num; i ++){
  answer = answer * i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

let num = factorial(3);
console.log(num);
