// 1. seal kora mane hosee kono 1ta property er value change kora jabe but delete kora jabena.

const laptop = {name: 'hp', color: 'black', price: 40000, service: true}
// get all the keys
const keys = Object.keys(laptop)
// get all values
const value = Object.values(laptop)
// console.log(value)

const pairs = Object.entries(laptop)
// console.log(pairs)
// delete the property
// Object.seal(laptop)
// Object.freeze(laptop)
// delete laptop.service;
// laptop.price = 60000;
// console.log(laptop)

const student = {name: 'Shakib', age: 20, honest: true}

const values  = Object.values(student)
// console.log(values)
const keys22 = Object.keys(student);
// console.log(keys22)

const jora = Object.entries(student)
// console.log(jora)

// Object.seal(student)
// student.name = 'Habib'
// console.log(student)
// delete student.name;

const obj ={a:1, b:7, c:3, length:2};
// console.log(Object.keys(obj).length);

const getGirlFriend= (name = "chokina")=>"name"; 
// console.log(getGirlFriend()); 

const number = () => {
    const sum = 80 + 9;
    return sum;
};
const result = number(80, 9)
console.log(result)

