//Module 17 : conditional task : if-else

//get free offer buying

function freeDrink() {
  let burger = 555;

  if (burger > 500) {
    console.log("Buy more and get free coke\n");
  } else {
    console.log("Otherwise buy coke by 30tk\n");
  }
}

//body mass index calculator

function bmiCalculator() {
  //body mass index : get your health condition

  let yourWeight = 69,
    height = 1.7;
  let bmiValue = yourWeight / (height * height);
  console.log(`bmi value is : ${bmiValue}\n`);

  if (bmiValue < 18.5) {
    console.log("you are underweight\n");
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    console.log("you're normal\n");
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    console.log("you're overweight\n");
  } else {
    console.log("you're obese\n");
  }
}

//grade calculator

function gradeCalc() {
  let subjectNum = 62;
  let grade;

  if (subjectNum >= 90 && subjectNum <= 100) {
    grade = "A";
  } else if (subjectNum >= 80 && subjectNum <= 89) {
    grade = "B";
  } else if (subjectNum >= 70 && subjectNum <= 79) {
    grade = "C";
  } else if (subjectNum >= 60 && subjectNum <= 69) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(`Your grade is : ${grade}\n`);
}

//nested if else using

function nestedFunc() {
  let yourScore = 85,
    friendScore = 70;

  if (yourScore > 80) {
    if (friendScore > 80) {
      console.log("Let's go for a lunch\n");
    } else if (friendScore >= 60) {
      console.log("Good Luck next time\n");
    } else if (friendScore >= 40) {
      console.log("Ignore friend message\n");
    } else {
      console.log("Block Him/Her\n");
    }
  } else {
    console.log("Go to home and sleep and act sad\n");
  }
}

//practice if else and ternary operator

function condFunc() {
  let num1 = 42,
    num2 = 34,
    res;

  if (num1 >= num2) {
    res = num1 * num1;
  } else {
    res = num1 + num2;
  }

  console.log(`Result is : ${res}\n`);
}

function ternaryFunc() {
  let num1 = 42,
    num2 = 34,
    res;

  res =
    num1 > num2
      ? console.log(`res is : ${num1 * num1}`)
      : console.log(`res is : ${num1 + num2}`);
}

//ticket fare calculator

function ticketFareFunc() {
  let ticketFare = 800,
    age = 65,
    discount;

  if (age < 10) {
    ticketFare = 0;
  } else if (age >= 10 && age <= 30) {
    discount = (ticketFare * 50) / 100;
    console.log(`Your bus fare is : ${discount}\n`);
    ticketFare -= discount;
  } else if (age >= 60) {
    discount = (ticketFare * 15) / 100;
    ticketFare -= discount;
  } else {
    ticketFare = 800;
  }

  console.log("fare is : ", ticketFare);
}

ticketFareFunc();
