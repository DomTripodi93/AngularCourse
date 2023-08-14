
let myArray = [4, 9, 10, 3, 5];
let mySecondArray = [10, 10, 9, 5, 0, 1];

let myCopyArray = myArray;

let myArrayString = JSON.stringify(myArray);

let myCloneArray = JSON.parse(myArrayString);

//...myArray
//4, 9, 10, 3, 5
let mySecondCloneArray =  [...myArray]

let myCombinedArray = [...myArray, ...mySecondArray];

myArray[2] = 100;

// console.log(myArray);
// console.log(myCopyArray);
// console.log(myCloneArray);
// console.log(mySecondCloneArray);
// console.log(myCombinedArray);


let myObject = {
    firstKey: 1,
    secondKey: 2
};

let mySecondObject = {
    secondKey: 5,
    thirdKey: 3
}

let myCopyObject = myObject;

let myCloneObject = {...myObject};

let myCombinedObject = {...myObject, ...mySecondObject, secondKey: 10};
let mySecondCombinedObject = {...mySecondObject, ...myObject};

myObject.firstKey = 7;

console.log(myObject);
console.log(myCopyObject);
console.log(myCloneObject);
console.log(myCombinedObject);
console.log(mySecondCombinedObject);
