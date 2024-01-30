//module 18: loop : 30/1/2024

// for of loop - JS

function forOfLoopFunc() {
  const numbers = [2, 8, 99, 55, 2389];

  for (const num of numbers) {
    console.log(num);
  }
}

//while loop in JS

function whileLoopFunc() {
  let num = 0;
  while (num < 5) {
    console.log("loop", num);
    //num = num + 1;
    num++;
  }
}

//print 1 to 10

function print1To10Func() {
  let num = 1;
  while (num <= 10) {
    console.log(num);
    num++;
  }
}

//1 to 10 series of sum : while-loop

function sumFunc() {
  let num = 1,
    sum = 0;

  while (num <= 10) {
    sum += num;
    num++;
  }
  console.log(`sum is : ${sum}`);
}

//get even numbers : while-loop

function evenNum() {
  let num = 1;
  while (num <= 10) {
    if (num % 2 == 0) {
      console.log(`even number is : ${num}`);
    }
    num++;
  }
}

// for loop : print 1 to 10

function forLoopFunction() {
  for (let num = 1; num <= 10; num++) {
    console.log(num);
  }
}

//for loop : get Odd numbers

function getOddNumForLoop() {
  for (let num = 1; num <= 20; num++) {
    if (num % 2 != 0) {
      console.log(num);
    }
  }
}

//decrement : reverse order using for loop

function decrement() {
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
}

//break using while loop

function breakFunc() {
  let i = 1;
  while (i < 10) {
    if (i == 5) {
      break;
    }
    console.log(i);
    i++;
  }
}

//continue using while loop

function continueFunc() {
  let i = 1;
  while (i < 60) {
    i++;
    if (i % 3 === 0) {
      continue;
    }

    console.log(i);
  }
}

//do while loop

function doWhileFunc() {
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 10);
}


doWhileFunc();
