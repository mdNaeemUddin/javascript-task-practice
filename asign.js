// Help the zoo manager Problem : 01

function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    return "Enter a positive number, Please.";
  }

  const ticketPrice = 120;
  const guardSalary = 500;
  const perStaffMealCost = 50;
  const haveStaff = 8;

  let totalStaffCost = haveStaff * perStaffMealCost;

  let profit = ticketPrice * ticketSale - (guardSalary + totalStaffCost);

  return profit;
}

//console.log(calculateMoney(10));

// Good Name , Bad Name Problem : 02

function checkName(goodName) {
  if (typeof goodName !== "string") {
    return "invalid";
  }

  let lastIndex = goodName.length - 1;
  let lastCharacter = goodName[lastIndex];
  let yourSanName;

  if (
    lastCharacter.toLowerCase() === "a" ||
    lastCharacter.toLowerCase() === "y" ||
    lastCharacter.toLowerCase() === "i" ||
    lastCharacter.toLowerCase() === "e" ||
    lastCharacter.toLowerCase() === "o" ||
    lastCharacter.toLowerCase() === "u" ||
    lastCharacter.toLowerCase() === "w"
  ) {
    yourSanName = "Good Name";
  } else {
    yourSanName = "Bad Name";
  }
  return yourSanName;
}

// console.log(checkName("jhankar"));

// Virus in my Array : 03

function deleteInvalids(mixArr) {
  if (!Array.isArray(mixArr)) {
    return "Enter an array values";
  }
  let numArr = [];

  for (let i = 0; i < mixArr.length; i++) {
    let indexValue = mixArr[i];
    if (typeof indexValue === "number") {
      if (indexValue >= 0 || indexValue <= 0) {
        numArr.push(mixArr[i]);
      }
    }
  }

  return numArr;
}

// const obj = {num: [ 1 , 2 , 3 ]}
// console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ));

// Make a great Password - 04

function password(obj) {
  // const obj = {
  //     name: "kolimuddin",
  //     birthYear: 1999,
  //     siteName: "google"
  // }

  if (!(obj.birthYear >= 1000 && obj.birthYear <= 9999)) {
    return "invalid";
  } else if (
    !typeof obj.name === "string" ||
    !typeof obj.birthYear === "number" ||
    !typeof obj.siteName === "string"
  ) {
    return "invalid";
  } else {
    let i = 0;
    for (const item in obj) {
      i++;
    }
    if (i !== 3) {
      return "invalid";
    }
  }

  const hashCharacter = "#";
  const ampersandChar = "@";

  let nameArr = obj.siteName.split("");

  let firstChar = nameArr[0].toUpperCase();
  nameArr[0] = firstChar;

  obj.siteName = nameArr.join("");

  let yourPassword = obj.siteName
    .concat(hashCharacter)
    .concat(obj.name)
    .concat(ampersandChar)
    .concat(obj.birthYear);

  return yourPassword;
}

// validation task remain here - others ok - bonus part

console.log(password({ name: "faka", birthYear: 2002, siteName: "faka" }));

// Monthly saving of a freelancer - 05

function monthlySavings(arr, leavingCost) {
  if (!Array.isArray(arr) || !typeof leavingCost === "number") {
    return "invalid input";
  }

  let arrNew = [];
  let saving = 0;
  let message = "earn more";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3000) {
      let tax = (arr[i] * 20) / 100;
      let index = arr[i] - tax;
      arrNew.push(index);
    } else {
      arrNew.push(arr[i]);
    }
  }

  for (const item of arrNew) {
    saving += item;
  }

  let savingMoney = saving - leavingCost;
  if (savingMoney >= 0) {
    return savingMoney;
  }

  return message;
}

// console.log(monthlySavings(100, [900, 2700, 3400]));
