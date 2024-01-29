
//milestone 16 : js intro task 
//base on variable, operator, basic builtin func

function taskOne() {
  let applePrice = 323;
  let orangePrice = 922;
  const haveMoney = 1500;
  let totalCost = applePrice + orangePrice;

  let returnMoney = haveMoney - totalCost;
  console.log(`return money : ${returnMoney}\n`);
}


function taskTwo()
{
  let math = 75.25,
    bio = 65,
    cht = 80,
    physics = 35.45,
    bang = 99.50;

  let totalNum = math + bio + cht + physics + bang;
  let avg = totalNum / 5.0;

  console.log(`Average Mark is : ${avg.toFixed(2)}`);
}

function taskThree()
{
    let num = 119; const divider = 5;
    let isRemainder = num % divider;

    console.log(`Remainder is : ${isRemainder}`);
}

function taskFour()
{
    let a = isNaN('11');
    let b = isNaN('naeem');

    console.log(`a is : ${a}\nb is : ${b}\n`);
}



