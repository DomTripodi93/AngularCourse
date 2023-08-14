
let myArray = [4, 9, 10, 3, 5];


let someElementsAre = myArray.some((number) => {
    // return number < 4;
    return number < 3;
})

console.log(someElementsAre);




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


let someElementObjectsAre = myObjectArray.some((row) => {
    // return row.myNumericKey < 5;
    return row.myNumericKey < 3;
})

console.log(someElementObjectsAre);
