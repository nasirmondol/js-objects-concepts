// Nested objects
const student = {
    id: 101,
    name: 'Hasan habib', 
    major: 'Mathematics',
    isRich: false,
    money: 5000,
    subject: ['Bangla', 'English', 'Science', 'zoology'],
    bestFriend: {
        name: 'kundu', 
        major: 'Mathematics'
    },
    takeExam: function(){
        // console.log(this.name, 'taking exam')
    },
    treatDey: function(expense, gift){
        this.money = this.money - expense - gift;
        return this.money; 
    }
     
}
student.takeExam();
const remaining = student.treatDey(500,50);
const remaining2 = student.treatDey(400, 50);
const remaining3 = student.treatDey(1000, 100);
// console.log (remaining2)

const person  = {
    name: 'Sahalom',
    job: 'student',
    money: 5000,
    subjects: ['Mathematics', 'bangla', 'English', 'Economy', 'Accounting'],
    friend: {
        name: 'Almus',
        subject: ['Mathematics', 'bangla', 'English', 'Economy'],
        age: 16, 
        active: true,
    } ,
    isRich: false,
    treatDey: function(expense){
        this.money = this.money - expense;
        return this.money;
    },
    takeRest: function(){
        console.log('You should rest ',this.name)
    }

}
person.takeRest()
const balancerr = person.treatDey(400)
// console.log(balancerr)


