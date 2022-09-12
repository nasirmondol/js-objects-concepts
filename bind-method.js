const student = {
    id: 101,
    name: 'Hasan habib', 
    major: 'Mathematics',
    isRich: false,
    money: 5000,
    
    treatDey: function(expense){
        this.money = this.money - expense;
        console.log('Here from',this)
        return this.money; 
    }
     
};
const heroBalam = {
    id: 101,
    name: 'Hero Balam',
    money: 6000,
};
const halimBalam = {
    id: 101,
    name: 'Halim Balam',
    money: 9000,
};

student.treatDey(100)

const oiTreatDey = student.treatDey.bind(heroBalam)
oiTreatDey(200);
student.treatDey(3000)

const halomTreatDey = student.treatDey.bind(halimBalam)
halomTreatDey(5000)