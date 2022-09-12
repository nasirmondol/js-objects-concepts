const student = {
    id: 101,
    name: 'Hasan habib', 
    major: 'Mathematics',
    isRich: false,
    money: 5000,
    
    treatDey: function(expense, bokshis, tax){
        this.money = this.money - expense - bokshis -tax;
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

// student.treatDey.call(halimBalam,5000, 100)
// student.treatDey.call(heroBalam, 1000, 100)
student.treatDey.apply(heroBalam, [1000, 100, 50])