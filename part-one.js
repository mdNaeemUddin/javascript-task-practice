//for - of loop in array

function arrayFunc() {
    const nums = [23, 878, 32, 8877, 998];
    for (const item of nums) {
        console.log(item);
    }
}

//string practicing : toLowerCase(), toUpperCase()

function stringFunc() {
    let x = "Naeem", y = 'naeem';

    if (x.toLowerCase() === y.toLowerCase()) {
        console.log("both are equal");
    } else {
        console.log("bother aren't equal");
    }
}


function stringBuilInFunc() {
    // let x = "Hello World";
    // let y = 'Hello';

    // console.log(x.toLowerCase().includes(y.toLowerCase()));

    // let xx = "the world most dangerous man";
    // let yy = "Wo";

    // console.log(xx.toLowerCase().includes(yy.toLowerCase()));

    const a = "hello";
    const b = "  hellO";

    if (a.trim().toLowerCase() == b.trim().toLowerCase()) {
        console.log("both are equal");
    } else {
        console.log("both aren't equal");
    }
}

//  array built in function - 
//  split() / join() : string to array & array to string

function arrayBuilInFunc() {
    const x = "the world most unwanted person";
    const words = x.split(' ');

    const concatWord = words.join('/');
    console.log(concatWord);
}

// object practice : 

const person = {
    name: "Mohammad",
    age: 24,
    favColor: "White & Black",
    food: "Rice & Fish",
    friends: ['rahad', 'rakib', 'zihad', 'sakib'],
    isMale: true,
    closeFriend: {
        name: "My Mind",
        age: "infinity",
        favColor: "black",
        location: "everywhere"
    }
}

console.log(person["favColor"]); // bracket notation in object

console.log(person.food); // dot notation in object


// object item see using : for-in loop

delete person.age; // delete a object property
console.log();

for (const item in person) {
    console.log(person[item]);
}

console.log();

console.log(person.closeFriend.name);


