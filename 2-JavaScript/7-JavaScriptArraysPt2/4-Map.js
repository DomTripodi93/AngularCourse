
let myArray = [4, 9, 10, 3, 5];


let myMappedArray = myArray.map((number) => {
    return number * 2;
})

console.log(myMappedArray);




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


let myMappedObjectArray = myObjectArray.map((row) => {
    // return row.myNumericKey //We can rip the value of one key out of the object 
    row.myNumericKey = row.myNumericKey * 100;
    row.myStringKey = row.myStringKey.toUpperCase();
    return row;
})

console.log(myMappedObjectArray);
