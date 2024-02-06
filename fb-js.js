
// reverse string

function reverseSentence() {
    const sentence = "Hello World, How are you?";
    let reverse = ""; console.log();

    for (let i = sentence.length - 1; i >= 0; i--){
        reverse += sentence[i];
    }
    console.log(reverse);
}


//Capitalize each word : split(), join(), slice(), toUpperCase(), toLowerCase()

function capitalizeWord() {
    const sentence = "hey, how are you. is it okay for you?";
    console.log(sentence);

    const breakSentence = sentence.split(' ');
    
    for (let i = 0; i < breakSentence.length; i++){
        breakSentence[i] = breakSentence[i][0].toUpperCase() + breakSentence[i].slice(1).toLowerCase();
    }
    console.log(breakSentence.indexOf('Okay'));
    console.log(breakSentence.join(' '));
}


//array built in function : push(), pop(), includes(), indexOf(), splice(), slice() 

function arrayFunc() {
    const numbers = [3, 87, 77, 97, 923, 87, 5, 872, 9877];

    numbers.push(23299);
    numbers.push(23, 99);
    numbers.pop();    
    numbers.unshift(99999);
    console.log(numbers);

    numbers.shift();

    console.log(numbers);

    if (numbers.includes(5)) {
        const item = numbers.indexOf(5);
        numbers.splice(item, 1);
    }

    console.log(numbers);

    const newNum = numbers.slice(1, 5);
    console.log(newNum);



}




arrayFunc();