let loopThrough = [1, 5, 3, "x"]

for (let i = 0; i < loopThrough.length; i++) {
    console.log(loopThrough[i]);
    if (i === 2) {
        // break;
        continue;
    }
    console.log("next line");
}

loopThrough.forEach(value =>{
    console.log(value);
    // if (value === 3) {
        // break;
        // continue;
    // }
})

loopThrough.forEach((value, i) =>{
    console.log(value);
    if (i === loopThrough.length - 1) {
        console.log("done");
    }
})

let i = 0;

console.log("While")

while (i < loopThrough.length) {
    i++;
    console.log(loopThrough[i]);
    if (i === 2) {
        // break;
        continue;
    }
    console.log("next line");
}


console.log("Do While")

let j = 0;
do {
    j++
    console.log(j)
    if (j === 2) {
        // break;
        continue;
    }
    console.log("next line");
} while (j < 3)
// } while (7 < 3)