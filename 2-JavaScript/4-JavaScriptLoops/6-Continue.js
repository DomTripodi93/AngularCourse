
let myArrayToLoopThrough = [3, 5, 6, "string", null];

for (let i = 0; i < myArrayToLoopThrough.length; i++) {
// for (let i = myArrayToLoopThrough.length - 1; i >= 0; i--) {
    // console.log("For");
    console.log(myArrayToLoopThrough[i]);
    if (i === 2) {
        // break;
        continue;
    }
    console.log("Next Line");
}

// myArrayToLoopThrough.forEach(value => {
//     console.log(value);
// })


// myArrayToLoopThrough.forEach((value, i) => {
//     // console.log("For Each");
//     if (i <= 2) {
//         console.log(value);
//         if (i === myArrayToLoopThrough.length - 1) {
//             console.log("This is the last item");
//         }
//     }
// })

let i = 0;

while (i < myArrayToLoopThrough.length) {
    // console.log("While");
    console.log(myArrayToLoopThrough[i]);
    // console.log(i);
    if (i === 2) {
        // break;
        i++;
        continue;
    }
    console.log("Next Line");
    i++;
}

let j = 0;

do {
    // console.log("Do While");
    console.log(myArrayToLoopThrough[j]);
    // console.log(j);
    if (j === 2) {
        // break;
        j++;
        continue;
    }
    console.log("Next Line");
    j++;
} while (j < myArrayToLoopThrough.length)
