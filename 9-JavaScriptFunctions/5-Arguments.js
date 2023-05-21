

function isEven (numToCheck) {
    // if (numToCheck % 2 === 0) {
    //     console.log("Even")
    // } else {
    //     console.log("Odd")
    // }

    // console.log(numToCheck % 2 === 0);

    let result = numToCheck % 2 !== 0 ? "Even" : "Odd";
    console.log(result);
}


isEven(23);

isEven(14);

function addNumbers(first, second) {
    console.log(first + second);
}

addNumbers(23, 14);
