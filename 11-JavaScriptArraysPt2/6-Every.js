
let someArray = [3, 2, 5, 1, 7]

let allValid = someArray.every(value => {
    // return value > 1; 
    return value < 10; 
})

console.log(allValid);


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

let allObjectsValid = objectArray.every(row => {
    // return row.textValue.length < 10; 
    return row.textValue.length > 3; 
})


console.log(allObjectsValid);
