

function dynamicFunctionArgument(callback) {
    console.log("This is the root function");
    callback();
}

dynamicFunctionArgument(() =>{
    console.log("This is an anonymous arrow function");
})

function callbackFunction() {
    console.log("This is a callback function");
}

console.log("\n");

// callbackFunction();
// dynamicFunctionArgument(callbackFunction());
dynamicFunctionArgument(callbackFunction);