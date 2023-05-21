
// let result = "";
// isEven(23);

let result = isEven(23);
console.log(result);

let resultTwo = isEven(14);
console.log(resultTwo);


function isEven (numToCheck) {
    // result = numToCheck % 2 === 0 ? "Even" : "Odd";
    let result = numToCheck % 2 === 0 ? "Even" : "Odd";
    // console.log(result);
    return result;
}


function addNumbers(first, second) {
    console.log(first + second);
    return first + second
}

let resultAdded = addNumbers(23, 14);

console.log(resultAdded);
