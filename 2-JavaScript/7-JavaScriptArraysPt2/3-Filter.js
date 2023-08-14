
let myArray = [4, 9, 10, 3, 5];

let myFilteredArray = myArray.filter((number) => {
    return number < 7;
})

console.log(myFilteredArray);



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

let filteredObjectArray = myObjectArray.filter((row) => {
    return row.myNumericKey < 10
})

console.log(filteredObjectArray);

let secondFilteredObjectArray = myObjectArray.filter((row) => {
    return row.myStringKey === "z";
})//[0]

console.log(secondFilteredObjectArray);