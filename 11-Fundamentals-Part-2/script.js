"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// logger();

function logger() {
  console.log("hello world");
}

// function declaration
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// function expression
const fruitProcessor2 = function (apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
};

// arrow function
const fruitProcessor3 = (apples, oranges) => {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
};

console.log(fruitProcessor(5, 0));
console.log(fruitProcessor2(3, 2));
console.log(fruitProcessor3(4, 1));
