function basicFunc() {
  const num = [32, 32, 87, 82, 23, 999, 23323, 98772, 88];

  console.log(num.length);
  console.log(num.splice(3, 2));
  console.log(num.slice(0, 4));
  console.log(num.length);
  console.log(num);
}
basicFunc();
