//declare an array

function declareArrayFunc() {
  const fruits = ["Mango", "Apple", "Banana", "watermelon", "Orange"];

  console.log(`Array is : \n${fruits}`);
  console.log(`3rd index value is : ${fruits[2]}`);

  //change 2nd index value replace by jambura
  fruits[1] = "Jambura";
  console.log(`Array is : ${fruits}`);
}

//add or remove elements in array

function addRemoveFunc() {
  const touristDest = ["Dhaka", "Chittagong", "Tangail"];
  console.log(`array is : ${touristDest}\n`);

  //adding elements end side in array
  touristDest.push("Sylhet");
  touristDest.push("Pakistan", "Afghanistan");

  console.log(`array is : ${touristDest}\n`);

  //remove last element
  touristDest.pop();
  console.log(`array is : ${touristDest}\n`);
}

//checking value in array

function findValue() {
  const book = ["bangla", "english", "math", "chemistry", "physics"];

  let isRes = book.includes("math");
  if (isRes === true) {
    console.log("present in array\n");
  } else {
    console.log("Not present in array\n");
  }
}

//checking if it's an array or not

function checkIsItArray() {
  let num = 882;
  const numbers = [2, 88, 23, 987, 232];

  if (Array.isArray(num)) {
    console.log("Yes, this's array");
  } else {
    console.log("Oops, this's not array");
  }
}


//combing array

function arrayCombineFunc()
{
    const num1 = [2, 8, 8, 3, 8];
    console.log(`first array list: ${num1}\n`);

    const num2 = [22, 88, 99, 232, 87];
    console.log(`second array list: ${num2}\n`);

    const numbers = num1.concat(num2);
    console.log(`Final array list: ${numbers}\n`);

}


arrayCombineFunc();