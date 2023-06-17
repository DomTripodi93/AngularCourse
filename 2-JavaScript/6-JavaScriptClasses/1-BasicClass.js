
class MyFirstClass {
    //Not a field - technically getters and setters are implemented by browsers
    ////More importantly, the inventors of JavaScript decided to name it as a property
    someProperty = "some value";
    someNumericProperty = 7;
}

console.log(MyFirstClass.someProperty);


let classInstance = new MyFirstClass();

console.log(classInstance.someProperty);


classInstance.someProperty = "new value";

console.log(classInstance.someProperty);


//Bad practice, but does work - adding a new property to an instance of a class
////Should be added to the class declaration
classInstance.newProperty = "new property";

console.log(classInstance.newProperty);

