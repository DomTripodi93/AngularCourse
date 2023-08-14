
class MyFirstClass {

    someStringProperty = "Some String Value";
    constructedProperty = "";
    numericProperty = 0;

    constructor(constructedPropertyValue) {
        // let constructedProperty
        console.log("Class instance was created")
        this.constructedProperty = constructedPropertyValue;
        // constructedPropeaarty = constructedPropertyValue;
    }

    addToNumeric(numberToAdd) {
        this.numericProperty += numberToAdd;
    }

}

// MyFirstClass.someStringProperty

let myClassInstance = new MyFirstClass("This is the constructed property's new value");
let mySecondClassInstance = new MyFirstClass("This is the second constructed property's new value");


// console.log(myClassInstance.someStringProperty);

// myClassInstance.someStringProperty = "A new value";

myClassInstance.addToNumeric(7);
mySecondClassInstance.addToNumeric(15);

console.log(myClassInstance.numericProperty);

console.log(mySecondClassInstance.numericProperty);