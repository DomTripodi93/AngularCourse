
let myNumberToPass = 17;

// isThisEven(4);
// isThisEven(7);
// isThisEven(23491380561723450);
// isThisEven(myNumberToPass);

addNumbers(5, 12, 27);
addNumbers(10, 9, 15);


function isThisEven(myNumber) {
    if (myNumber % 2 === 0) {
        console.log("This is even: " + myNumber);
    } else {
        console.log("This is odd: " + myNumber);
    }
}


function addNumbers(firstNumber, secondNumber, thirdNumber) {
    console.log(firstNumber + secondNumber + thirdNumber);
}