function add(a, b) {
  return a + b;
}


function arrayAdd(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

function getEven(numbers) {
    const evenNum = [];  let sum = 0;
    for (const even of numbers) {
        if (even % 2 === 0) {
            evenNum.push(even);
            sum += even;
        }
    }
    return evenNum;
}

const num = [23, 887, 732, 9872, 87];

console.log(getEven(num));





