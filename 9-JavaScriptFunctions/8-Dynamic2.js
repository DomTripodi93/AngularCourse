
function dynamicNestedCallbackFunc(callback) {
    console.log("This is the main function");

    // function nestedFunc() {
    //     console.log("This is the nested function")
    //     callback();
    // }
    // return nestedFunc;

    return () => {
        console.log("This is the nested function")
        callback();
    }
}

function callback() {
    console.log("This is the callback");
}

function callbackTwo() {
    console.log("This is a different callback");
}

//Similar to a "decorated" function
const firstCallbackResponse = dynamicNestedCallbackFunc(callback);

firstCallbackResponse();
firstCallbackResponse();

console.log("\n")
const secondCallbackResponse = dynamicNestedCallbackFunc(callbackTwo);

secondCallbackResponse();
secondCallbackResponse();
