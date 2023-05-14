
let myFirstArr = [
    "string",
    4,
    4.5,
    new Date(),
    null,
    undefined
];

console.log(myFirstArr);
console.log(myFirstArr[3]);
console.log(myFirstArr.length);
console.log("\n");

myFirstArr[3] = "Changed Value";

console.log("Changed:")
console.log(myFirstArr[3]);
console.log("\n");


myFirstArr.push("Added Value")

console.log("Added to:")
console.log(myFirstArr);
console.log("\n");


myFirstArr.pop()

console.log("Removed from:")
console.log(myFirstArr);
console.log("\n");


let mySecondArr = myFirstArr.slice(2,5)

console.log("Sliced:")
console.log(myFirstArr);
console.log(mySecondArr);
console.log("\n");


//splice(At index, Number of values to replace, Value to insert)
console.log("Spliced:")
console.log(myFirstArr);

// myFirstArr.splice(2, 2, "Spliced in")
// myFirstArr.splice(2, 4, "Spliced in")
// myFirstArr.splice(2, 0, "Spliced in")
myFirstArr.splice(2, 10, "Spliced in")

console.log(myFirstArr);
console.log("\n");
