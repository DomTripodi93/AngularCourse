
let myNumberToPass = 17;

// isThisEven(4);
// isThisEven(7);
// isThisEven(23491380561723450);
// isThisEven(myNumberToPass);

let functionVariable = addNumbers;
let result1 = functionVariable(5, 12, 27);
let result2 = addNumbers(10, 9, 15);
let result3 = addNumbers(10, 9);
addNumbers();

console.log("Results:")

console.log(result1);
console.log(result2);
console.log(result3);


function isThisEven(myNumber) {
    if (myNumber % 2 === 0) {
        console.log("This is even: " + myNumber);
    } else {
        console.log("This is odd: " + myNumber);
    }
}


function addNumbers(firstNumber, secondNumber, thirdNumber = 0) {
    console.log(firstNumber + secondNumber + thirdNumber);
    return firstNumber + secondNumber + thirdNumber;
}