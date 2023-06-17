
class MyFirstClass {
    //Not a field - technically getters and setters are implemented by browsers
    ////More importantly, the inventors of JavaScript decided to name it as a property
    someProperty;
    // someProperty = "some value";
    someNumericProperty = 7;

    constructor(somePropertyValue) {
        // someProperty = somePropertyValue;
        this.someProperty = somePropertyValue;
    }

    addToNumeric(valueToAdd) {
        this.someNumericProperty += valueToAdd;
        console.log(this.someNumericProperty);
    }
}


class MyInheritingClass extends MyFirstClass {
    newProperty = "new property"
    someNumericProperty = 10

    constructor(somePropertyValue, newPropertyValue) {
        super(somePropertyValue);
        // someProperty = somePropertyValue;
        // this.someProperty = somePropertyValue;
        this.newProperty = newPropertyValue;
        // super(somePropertyValue);
    }

    addToNumeric(valueToAdd) {
        console.log("Before Adding: " + this.someNumericProperty);
        super.addToNumeric(valueToAdd);
        // this.someNumericProperty += valueToAdd;
        console.log("After Adding: " + this.someNumericProperty);
    }

    subtractFromNumeric(valueToSubtract) {
        this.someNumericProperty -= valueToSubtract;
        console.log(this.someNumericProperty);
    }
}

let classInstance = new MyInheritingClass("new value", "new property value");

console.log(classInstance.someProperty);
console.log(classInstance.newProperty);


classInstance.addToNumeric(12)
// classInstance.addToNumeric(-22)
classInstance.subtractFromNumeric(22)
