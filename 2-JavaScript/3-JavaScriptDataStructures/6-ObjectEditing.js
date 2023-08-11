
let myFirstObject = {
    myStringKey: "Some String",
    myNestedArray: [1, 2, 3],
    myNestedObject: { firstKey: 1, secondKey: 2 }
}

let myCopyObject = myFirstObject;

console.log(myFirstObject);

myFirstObject.myNewKey = "My new value";
delete myFirstObject.myNestedArray;
myFirstObject.myStringKey = "My edited value";

console.log(myFirstObject);
console.log(myCopyObject);
