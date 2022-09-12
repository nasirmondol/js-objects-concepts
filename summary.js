const pen = {
    brand: 'Econo',
    price: 20,
    writePoem: function(food){
        console.log(food)
    }
}

const keys = Object.keys(pen)
const values = Object.values(pen)
// console.log(pen)

for(const key in pen){
    // console.log(pen[key])
}

const a = {a: 2};
const b =  {a: 2}
const c =  a;

if(c === b){
    // console.log('object is equal')
}
else{
    // console.log('object is not equal')
}

// const aBound  = pen.writePoem.bind(a)
// aBound(600)
// console.log(pen)