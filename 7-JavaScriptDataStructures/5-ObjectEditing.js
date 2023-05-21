
let myFirstObject = {
    firstKey: "First Value",
    someArray: [1, 5, 3, "x"],
    someObject: {innerKey: "Inner Value"}
}

console.log(myFirstObject);

// myFirstObject["firstKey"] = "New Value";
// delete myFirstObject["someArray"];

myFirstObject.firstKey = "New Value";
delete myFirstObject.someArray;

console.log(myFirstObject);
console.log(myFirstObject.firstKey)




