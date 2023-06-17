
function dynamicCallbackFunc(callback) {
    console.log("This is the main function");
    callback();
}

function callback() {
    console.log("This is the callback");
}

function callbackTwo() {
    console.log("This is a different callback");
}

dynamicCallbackFunc(callback);

console.log("\n");

dynamicCallbackFunc(callbackTwo);