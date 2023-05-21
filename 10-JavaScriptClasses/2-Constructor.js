
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
}


let classInstance = new MyFirstClass("new value");

console.log(classInstance.someProperty);

