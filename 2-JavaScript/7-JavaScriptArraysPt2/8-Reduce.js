
let someArray = [3, 2, 5, 1, 7]

// let startingValue = 0;
// let startingValue = 1;
let startingValue = 5;

let reduction = someArray.reduce((accumulation, next) => {
    // return accumulation * next; 
    return accumulation + next; 
}, startingValue)

console.log(reduction);


let objectArray = [
    {
        textValue: "test",
        numericValue: 12
    },
    {
        textValue: "abc",
        numericValue: 22
    },
    {
        textValue: "middle",
        numericValue: 28
    }
]

// let objectStartingValue = 0;
let objectStartingValue = "";

let objectReduction = objectArray.reduce((accumulation, next) => {
    // return accumulation + next.numericValue;
    return accumulation + next.textValue + " "; 
}, objectStartingValue)


console.log(objectReduction);
