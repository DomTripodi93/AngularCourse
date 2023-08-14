
class MyFirstClass {
    //Not a field - technically encapsulation (getters and setters) is implemented by browsers
    ////More importantly, the inventors of JavaScript decided to name it as a property
    someStringProperty = "Some String Value";
}

//Bad practice, but does work - you should access a property on an instance of a class
// MyFirstClass.someStringProperty

let myClassInstance = new MyFirstClass();
let mySecondClassInstance = new MyFirstClass();


console.log(myClassInstance.someStringProperty);

myClassInstance.someStringProperty = "A new value";

console.log(myClassInstance.someStringProperty);


console.log(mySecondClassInstance.someStringProperty);
