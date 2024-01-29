/**
 * variable -- > vary + able
 * 5 things to declare a variable
 * string
 * boolean
 * typeof
 *
 *
 */

function arrayFunc() {
  const numbers = [23, 433, 232, 32];

  //add element end & first - push() and unshift()
  numbers.push(2329);
  numbers.push(98);
  numbers.unshift(999);

  console.log(numbers);
  console.log(`array length: ${numbers.length}`);
  console.log("\n");

  //remove elements for an array specific position
  numbers.splice(1, 2);

  console.log(numbers);
  console.log(`array length: ${numbers.length}`);
  console.log(numbers[numbers.length - 1]);
}

function basicFunc() {
  const num = [32, 88, 92, 982];
  num.pop();
  num.pop();
  num.push(323);
  num.push(99, 322, 993);
  num.unshift(28, 999, 883);

  num.shift();

  console.log(num.length);
  console.log(num);
}

function includeFunc() {
  const names = ["karim", "rahim", "rakib", "redoy"];
  console.log(names);

  if (names.includes("naeem")) {
    console.log(`Hello, karim}\n`);
  } else {
    console.log("Wrong Person\n");
  }

  var x = names.includes("karim");
  console.log(x);

  var y = names.indexOf("raka");
  console.log(y);

  console.log(Array.isArray(names));
  console.log(Array.isArray(x));
}

function conceptFunc()
{
  console.log("I am here to learn\nWhat?\nProgramming\n");
  
}

conceptFunc();