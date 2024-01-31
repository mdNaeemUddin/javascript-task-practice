//module 19 : string & object

function stringFunc() {
    const country = "bangladesh";
    const division = 'Dhaka';
    const district = `Tangail`; //length property, index
    const upzilla = new string('Ghatail');

    console.log("length is : ", country.length);
    console.log(country[0]);

    const school = 'RAJ UK Uttara Model School';
    const subject = 'Chemistry';
    const book = '   chemistry';


//toLowerCase(), toUpperCase(), trim()


    console.log(school.toLowerCase());
    console.log(book.toUpperCase());

    if (subject.toLowerCase() === book.toLocaleLowerCase()) {
        console.log('Read the book');
    } else {
        console.log("it's too hard. I don't read");
    }

    if (subject.toLowerCase().trim() === book.toLowerCase().trim()) {
        console.log('go to library and read more');
    } else {
        console.log("don't read");
    }
}


//split() , join(), includes(), concat()

function stringMethod() {
    const address = "bangladesh is a small country in south asia";
    const part = address.slice(6, 10);
    const part2 = address.split(' ');
    // console.log(address.split(' '));
    const newAdd = part2.join('-');
    console.log(newAdd);
    console.log(address.includes('a'));

    const firstName = "Md. Naeem", lastName = "Uddin";
    const fullName = firstName.concat(' ').concat(lastName);
    console.log('Your name is : ', fullName);
}


function stringReverseFunc() {
    const sentence = "I love her";
    
    let reverse = '';

    // for (const letter of sentence) {
    //     console.log(letter);
    // }

    // for (const letter of sentence) {
    //     reverse = letter + reverse;
    // }

    for (let i = 0; i < sentence.length; i++){
        const letter = sentence[i];
        reverse = letter + reverse;
        console.log(reverse);
    }
    console.log(reverse);
}


// object - key & values 

function objectFuc() {
    
    const student ={
        name: 'Md. Naeem Uddin',
        institute: 'DPI',
        depart: "ChT",
        isPassed: true,
        age: 25,
        chapter: ['bangla', 'english', 'math'],
        exams: {
            nam: 'final exam',
            number: 1000
        }
    }
    // console.log(student);
    // console.log("exam number is : ", student.exams.number);

    
    //bracket notation -

    console.log(student['institute']);




}

//get all keys & delete a in object

function keyObject() {
    const computer = {
        brand: 'dell',
        price: 40000,
        processor: 'intel',
        hdd: '512GB'
    }

    //get all keys 
    delete computer.brand;
    const keys = Object.keys(computer);
    console.log(keys);
}


//for of : array
//for in : object
    
function newObjectfunc() {
    const computer = {
        brand: 'dell',
        price: 40000,
        processor: 'intel',
        hdd: '512GB'
    };

    //for of : array
    //for in : object

    for (const value in computer) {
        // console.log(value);
        //console.log(computer[value]);
    }

    const keys = Object.keys(computer);
    console.log(keys);

    for (const key of keys) {
        console.log(key, " : ", computer[key]);
    }

}

//create a new object different way

function newWayToDeclareObject() {
    const pen = { brand: 'econo', price: 10, color: 'red' }
    const pencil = new Object();
    console.log(pen.name);

    const rubber = Object.create({});
    console.log(rubber);
}

newWayToDeclareObject();