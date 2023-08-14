
let myArray = [4, 9, 10, 3, 5];

myArray.sort((first, second) => {
    // return first < second ? -1 : 1;
    return first > second ? -1 : 1;
})

console.log(myArray);


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

myObjectArray.sort((first, second) => {
    return first.myNumericKey < second.myNumericKey ? -1 : 1
})

console.log(myObjectArray);


myObjectArray.sort((first, second) => {
    return first.myStringKey > second.myStringKey ? -1 : 1
})

console.log(myObjectArray);
