function basicFunc() {
  const num = [32, 32, 87, 82, 23, 999, 23323, 98772, 88];

  console.log(num.length);
  console.log(num.splice(3, 2));
  console.log(num.slice(0, 4));
  console.log(num.length);
  console.log(num);
}


function arrayTravel() {
  const numbers = [23, 87, 873, 73,78];
  const num = numbers.sort();
  console.log(num);
  let i = 0;
  while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
  }
}

arrayTravel();
