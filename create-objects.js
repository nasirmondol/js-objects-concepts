//1. literal objects
const student = {name: 'Asad ali', job: 'student'}

//2. constructor
const person = new Object();
// console.log(person);

// 3.
// const human = Object.create(null)
const human = Object.create(student)
// console.log(human.job)

// 4. class
class People{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
}
const peop = new People('Rashid', 42, 'Teacher')
// console.log(peop)

// 5. function
function Manus(name, age){
    this.name = name;
    this.age = age;
}
const man = new Manus('Abram', 'student')
// console.log(man)

// class

class khala{
    constructor(name, job, age){
        this.name = name;
        this.age = age,
        this.job = job;
    }
}

const khalaDetails = new khala('Rabeya', 'kitchen', 39)
// console.log(khalaDetails)

const car = {name: 'Toyota', Price: 6000000, model: 'v69'}
// console.log(car)

const ami = new Object(car)
// console.log(ami.name)

class Rahim{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job
    }
}

const details = new Rahim('Rahim Miah', 30, 'Web dev')
// console.log(details.name);

function arabiah(country, number){
    this.count = country;
    this.number = number;
    
}

const nation = new arabiah('Soudi arabiah', 1)
console.log(nation)
