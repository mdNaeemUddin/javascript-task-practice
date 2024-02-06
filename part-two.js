// basic function

function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'not a number';
    }
    return a + b;
}


// validation in JS

function studentInfo(student) {

    if (typeof student !== 'object') {
        return 'give me object type value';
    } else if (typeof student.name !== 'string' || typeof student.age !== 'number') {
        return 'enter string & number value';
    } else if (student.age <= 0) {
        return 'enter positive value';
    }
    
    return `name is : ${student.name} and age is : ${student.age}`;
}

console.log(studentInfo({ name: "Naeem Uddin", age: -25 }));