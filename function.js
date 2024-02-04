function add(a, b) {
  return a + b;
}

function arrayAdd(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

function getOdd(numbers) {
  const oddNum = [];
  let sum = 0;
  for (const odd of numbers) {
    if (odd % 2 !== 0) {
      oddNum.push(odd);
    }
  }

  for (const odd of oddNum) {
    sum += odd;
  }
  console.log(oddNum);
  const avg = sum / oddNum.length;
  return avg;
}

// const num = [23, 887, 732, 9872, 87];
// const oddAvg = getOdd(num);
// console.log("Avg is : ", oddAvg.toFixed(2));

//remove duplicate numbers from array -
function duplicateRemove(arr) {
  const arr2 = [];
  for (const item of arr) {
    if (arr2.includes(item) === false) {
      arr2.push(item);
    }
  }
  return arr2;
}

// const numbers = [23, 87, 23, 87, 98, 23, 87];
// console.log(numbers);
// console.log(duplicateRemove(numbers));

//math builtin function - min,max,pi,abs,round,floor,ceil, random
function minAndMax() {
  const minNum = Math.min(32, 87, 213, 872, 8, 2323);
  console.log(minNum);

  const maxNum = Math.max(32, 87, 677, 999, 2323, 8777);
  console.log(maxNum);

  console.log(Math.PI);
  console.log(Math.abs(46.99 - 50));
  console.log(Math.round(4.6));
  console.log(Math.floor(4.9));
  console.log(Math.ceil(4.2));
  console.log(Math.random());
}

function dateAndTime() {
  const today = new Date();
  const date = new Date("2062-12-18");

  console.log(today);
  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDay());

  const specialDate = new Date(2091, 0, 26);
  console.log(specialDate);
}

function swapNum() {
  let a, b, temp;
  (a = 32), (b = 99);
  console.log(a, b);

  temp = b;
  b = a;
  a = temp;
  console.log(a, b);

  let x = 100,
    y = 200;
  console.log(x, y);
  [x, y] = [y, x];
  console.log(x, "", y);

  console.log(Math.sqrt(4));
  // for (var i = 0; i < 5; i++){
  //   setTimeout(function (){
  //     console.log(i);
  //   },100);
  // }

  let xx = 33,
    yy = "abdul rahim";
  [xx, yy] = [yy, xx];
  console.log(xx, yy);
}

//get max number by comparing two or multiple numbers
function getDeliciousFood() {
  let a = 88,
    b = 32,
    c = 987;
  if (a >= b && a >= c) {
    console.log(a, " is biger than ", b, " and ", c);
  } else if (b >= c && b >= a) {
    console.log(b, " is greater than ", c, " and ", a);
  } else {
    console.log(c, " is greater than ", a, " and ", b);
  }
}

//get min numbers from array

function getMaxArr(arr) {
  let min = arr[0];
  for (const item of arr) {
    if (item < min) {
      min = item;
    }
  }
  return min;
}

const arr = [2, 87, 897, 998, 9023];
// console.log(getMaxArr(arr));

//calculate money requirement for shoping

function shopingMoneyRequire(a, b, c) {
  const shirt = 2,
    pant = 3,
    underwear = 4;
  a *= shirt;
  b *= pant;
  c *= underwear;

  const total = a + b + c;
  return total;
}

//console.log(shopingMoneyRequire(450, 233, 883));
