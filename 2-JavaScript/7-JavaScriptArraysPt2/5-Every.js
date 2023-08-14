
let myArray = [4, 9, 10, 3, 5];


let everyElementIs = myArray.every((number) => {
    return number < 10;
    // return number < 17;
})

console.log(everyElementIs);




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


let everyElementObjectIs = myObjectArray.every((row) => {
    // return row.myNumericKey < 10;
    return row.myNumericKey < 100;
})

console.log(everyElementObjectIs);
