const first = {a: 1};
const second = {a: 1};
const third = first;
console.log(JSON.stringify(first))
console.log(JSON.stringify(second))
if(third === second){
    console.log('objects are equal')
}
else{
    console.log('objects are not equal')
}