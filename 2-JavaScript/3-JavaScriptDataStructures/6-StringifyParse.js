
let myFirstObject = {
    firstKey: "First Value",
    someArray: [1, 5, 3, "x"],
    someObject: {innerKey: "Inner Value"}
}

console.log(myFirstObject);


let stringObj = JSON.stringify(myFirstObject);

console.log(stringObj);


let objectClone = JSON.parse(stringObj)

console.log(objectClone);


let stringArr = JSON.stringify(myFirstObject.someArray);

console.log(stringArr);


let arrayClone = JSON.parse(stringArr)

console.log(arrayClone);


