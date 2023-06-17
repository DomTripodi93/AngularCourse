
let someArray = [3, 2, 5, 1, 7]

let filteredArray = someArray.filter(value => {
    // return value > 3; 
    return value <= 3; 
})

console.log(filteredArray);


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

let filteredObjectArray = objectArray.filter(row => {
    // return row.numericValue > 20; 
    // return row.textValue = "test"; 
    return row.textValue.includes("e"); 
})


console.log(filteredObjectArray);
