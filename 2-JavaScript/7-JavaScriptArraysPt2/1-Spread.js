
let someArray = [3, 2, 5, 1, 7]
let someOtherArray = [4, 0, 10, 9, 7]

// [3, 2, 5, 1, 7], [4, 0, 10, 9, 7]
// 3, 2, 5, 1, 7, 4, 0, 10, 9, 7

let combinedArray = [...someArray, ...someOtherArray]

console.log(combinedArray);


let someObject = {
    someString: "First Object",
    someNumber: 7
}

let someOtherObject = {
    someString: "Second Object",
    someOtherNumber: 12
}

// let combinedObject = {...someObject, ...someOtherObject};
// let combinedObject = {...someOtherObject, ...someObject};
let combinedObject = {
    someString: "New Object", 
    ...someObject, 
    ...someOtherObject
};

console.log(combinedObject)
