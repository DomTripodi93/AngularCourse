
let myArrayToLoopThrough = [3, 5, 6, "string", null];

// for (let i = 0; i < myArrayToLoopThrough.length; i++) {
// // for (let i = myArrayToLoopThrough.length - 1; i >= 0; i--) {
//     console.log(myArrayToLoopThrough[i]);
// }

// myArrayToLoopThrough.forEach(value => {
//     console.log(value);
// })


// myArrayToLoopThrough.forEach((value, i) => {
//     console.log(value);
//     if (i === myArrayToLoopThrough.length - 1) {
//         console.log("This is the last item");
//     }
// })

let i = 10;

while (i < myArrayToLoopThrough.length) {
    console.log("While");
    console.log(myArrayToLoopThrough[i]);
    i++;
    // console.log(i);
}

let j = 10;

do {
    console.log("Do While");
    console.log(myArrayToLoopThrough[j]);
    j++;
    console.log(j);
} while (j < myArrayToLoopThrough.length)
