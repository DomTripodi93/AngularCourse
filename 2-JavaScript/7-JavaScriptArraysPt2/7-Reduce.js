
let myArray = [4, 9, 10, 3, 5];

let startingValue = 0;

let sumOfArrayNumbers = myArray.reduce((accumulator, number) => {
    return accumulator + number;
}, startingValue)

console.log(sumOfArrayNumbers);




let myObjectArray = [
    {
        myNumericKey: 8,
        myStringKey: "a" 
    },
    {
        myNumericKey: 3,
        myStringKey: "b" 
    },
    {
        myNumericKey: 10,
        myStringKey: "c" 
    },
    {
        myNumericKey: 15,
        myStringKey: "z" 
    }
]


let sumOfArrayNumericKeys = myObjectArray.reduce((accumulator, row) => {
    // return row.myNumericKey < 5;
    return accumulator + row.myNumericKey;
}, startingValue)

console.log(sumOfArrayNumericKeys);

let startingStringValue = "";

let joinOfStringKeys = myObjectArray.reduce((accumulator, row) => {
    // return row.myNumericKey < 5;
    return accumulator + "," + row.myStringKey;
}, startingStringValue).substring(1);

console.log(joinOfStringKeys);
