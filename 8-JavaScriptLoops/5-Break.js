let loopThrough = [1, 5, 3, "x"]

for (let i = 0; i < loopThrough.length; i++) {
    console.log(loopThrough[i]);
    if (i === 2) {
        break;
    }
}

loopThrough.forEach(value =>{
    console.log(value);
    // if (value === 3) {
    //     break;
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
        break;
    }
}


console.log("Do While")

let j = 0;
do {
    j++
    console.log(j)
    if (j === 2) {
        break;
    }
} while (j < 3)
// } while (7 < 3)