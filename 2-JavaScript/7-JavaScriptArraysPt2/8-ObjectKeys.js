
let myObject = {
    myNumericKey: 15,
    myStringKey: "z",
    myRandomKey: 10
}

let myPartiallySetupObject = {
    myDifferentKey: "x"
}

let myKeys = Object.keys(myObject);

console.log(myKeys);

myKeys.forEach(key =>{
    console.log(myObject[key]);
    myPartiallySetupObject[key] = myObject[key];
})

console.log(myPartiallySetupObject);

