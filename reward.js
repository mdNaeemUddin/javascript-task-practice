
// reward problem solving :

function reverseArray() {
    const fruits = ['apple', 'banana', 'conconut', 'Orange'];

    for (const item of fruits) {
        console.log(item);
    }
    
    //reverse array -
    console.log();

    for (let i = fruits.length - 1; i >= 0; i--){
        console.log(fruits[i]);
    }

    // get sum of array
    const num = [23, 87, 87, 897, 87, 33];
    let sum = 0;

    for (let item of num) {
        sum += item;
    }

    console.log(`Sum is : ${sum}`);
}

//find a index 

function findAIndexInArray() {
    const fruits = ['apple', 'banana', 'conconut', 'Orange'];

    let foundINdex = -1;
    const target = 'naeem';

    for (let i = 0; i < fruits.length; i++){
        const currentFruit = fruits[i];

        if (currentFruit === target) {
            foundINdex = 1;
        }
    }

    if (foundINdex === 1) {
        console.log("Founded target element");
    } else {
        console.log("Not founded");
    }
}

//find min and max numbers -

function findMinAndMax() {
    const num = [23, 87, 87, 897, 87, 33];
    let minNum = num[0];
    let maxNum = num[0];

    for (let i = 0; i < num.length; i++) {
        let currentNum = num[i];

        if (maxNum <= currentNum) {
            maxNum = currentNum;
        }

        if (minNum >= currentNum) {
            minNum = currentNum;
        }
    }

    console.log(`min num is : ${minNum} and max num is : ${maxNum}`);
}

findMinAndMax();