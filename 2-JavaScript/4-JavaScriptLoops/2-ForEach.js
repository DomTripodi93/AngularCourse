let loopThrough = [1, 5, 3, "x"]

for (let i = 0; i < loopThrough.length; i++) {
    console.log(loopThrough[i]);
}

loopThrough.forEach(value =>{
    console.log(value);
})

loopThrough.forEach((value, i) =>{
    console.log(value);
    if (i === loopThrough.length - 1) {
        console.log("done");
    }
})
