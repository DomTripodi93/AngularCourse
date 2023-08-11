
let myFirstObject = {
    myStringKey: "Some String",
    myNestedArray: [1, 2, 3],
    myNestedObject: { firstKey: 1, secondKey: 2 }
}

console.log(myFirstObject);

let myObjectString = JSON.stringify(myFirstObject);

console.log(myObjectString);

let myClonedObject = JSON.parse(myObjectString);

myFirstObject.myStringKey = "Edited Value";

console.log(myFirstObject);
console.log(myClonedObject);
