
let someArray = [3, 2, 5, 1, 7]

let mappedArray = someArray.map(value => {
    // return value + 5; 
    return value * 2; 
})

console.log(mappedArray);


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

let mappedObjectArray = objectArray.map(row => {
    row.numericValue += 10
    row.textValue = row.textValue.toUpperCase();
    return row; 
})


console.log(mappedObjectArray);
