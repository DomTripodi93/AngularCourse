
let myArrayToLoopThrough = [3, 5, 6, "string", null];

// for (let i = 0; i < myArrayToLoopThrough.length; i++) {
for (let i = myArrayToLoopThrough.length - 1; i >= 0; i--) {
    console.log(myArrayToLoopThrough[i]);
}
