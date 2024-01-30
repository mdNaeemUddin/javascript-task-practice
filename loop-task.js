//module 18 : loop tasks

//break task -

function centuryFunc() {
  let i = 1;
  while (i <= 200) {
    if (i == 100) {
      break;
    }
    console.log(i);
    i++;
  }
}

function sumUptoHundred() {
  let i = 1;
  let sum = 0;
  while (true) {
    sum += i;
    i++;
    if (sum >= 100) {
      break;
    }
    console.log(sum);
  }
  console.log("sum is : ", sum);
}

function squareBreak() {
  let i = 1;
  while (i <= 100) {
    console.log(i);
    if (i * i === i ** 2) {
      break;
    }
    i++;
  }
}

//continue practice

function continueEven() {
  let i = 1;
  while (i <= 40) {
    i++;
    if (i % 2 != 0) {
      continue;
    }
    console.log(i);
  }
}

function skipDivisibleNum() {
  let i = 55;
  while (i <= 85) {
    i++;
    if (i % 5 == 0) {
      continue;
    }
    console.log(i);
  }
}

//for loop practice

function forLoopFunc() {
  for (let i = 1; i <= 3; i++) {
    console.log(
      "i : ",
      i,
      " I will invest at least 6 hrs every single day for next 60 days!"
    );
  }

  let sum1 = 0,
    sum2 = 0;

  console.log("Below is Odd Numbers : ");

  for (let i = 61; i <= 100; i++) {
    if (i % 2 != 0) {
      sum1 += i;
      console.log(i);
    }
  }

  console.log("Odd sum is : ", sum1);

  console.log("below is Even numbers : ");

  for (let i = 78; i <= 98; i++) {
    if (i % 2 == 0) {
      sum2 += i;
      console.log(i);
    }
  }
  console.log("Even sum is : ", sum2);
}

function multiplicationTable() {
  let i = 1,
    j = 10;
  const num = 9;
  for (; i <= j; i++) {
    console.log(num, " * ", i, " = ", i * num);
  }

  //count down
  console.log("Count down value below: ");
  for (let i = 81; i >= 65; i--) {
    console.log(i);
  }
}

//while loop practice

function whileLoopFunc() {
  let i = 1;
  while (i <= 3) {
    console.log(
      "i : ",
      i,
      " I will invest at least 6 hrs every single day for next 60 days!"
    );
    i++;
  }

  let sum1 = 0,
    sum2 = 0;

  console.log("Below is Odd Numbers : ");
  let startNum = 61;
  while (startNum <= 100) {
    if (startNum % 2 != 0) {
      sum1 += startNum;
      console.log(startNum);
    }
    startNum++;
  }

  console.log("Odd sum is : ", sum1);

  console.log("below is Even numbers : ");

  let startnumTwo = 55;
  while (startnumTwo <= 98) {
    if (startnumTwo % 2 == 0) {
      sum2 += startnumTwo;
      console.log(startnumTwo);
    }
    startnumTwo++;
  }
  console.log("Even sum is : ", sum2);
}

function multiWhileFunc() {
  let i = 1,
    j = 10;
  const num = 9;
  while (i <= j) {
    console.log(num, " * ", i, " = ", i * num);
    i++;
  }

  //count down
  console.log("Count down value below: ");
  let start = 81;
  while (start >= 65) {
    console.log(start);
    start--;
  }
}

whileLoopFunc();
multiWhileFunc();
