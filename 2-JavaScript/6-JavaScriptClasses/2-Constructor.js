
class MyFirstClass {

    someStringProperty = "Some String Value";
    constructedProperty = "";

    constructor(constructedPropertyValue) {
        // let constructedProperty
        console.log("Class instance was created")
        this.constructedProperty = constructedPropertyValue;
        // constructedPropeaarty = constructedPropertyValue;
    }

}

// MyFirstClass.someStringProperty

let myClassInstance = new MyFirstClass("This is the constructed property's new value");
let mySecondClassInstance = new MyFirstClass("This is the second constructed property's new value");


// console.log(myClassInstance.someStringProperty);

// myClassInstance.someStringProperty = "A new value";


console.log(myClassInstance.constructedProperty);

console.log(mySecondClassInstance.constructedProperty);