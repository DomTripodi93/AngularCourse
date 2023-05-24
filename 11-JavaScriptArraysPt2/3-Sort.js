
let someArray = [3, 2, 5, 1, 7]

someArray.sort((first, second) => {
    // return first < second ? -1 : 1; //Ascending
    return first > second ? -1 : 1; //Descending
})

console.log(someArray);


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

objectArray.sort((first, second) => {
    // return first.numericValue > second.numericValue ? -1 : 1; //Descending
    // return first.numericValue < second.numericValue ? -1 : 1; //Ascending
    return first.textValue > second.textValue ? -1 : 1; //Descending
    // return first.textValue < second.textValue ? -1 : 1; //Ascending
})


console.log(objectArray);
