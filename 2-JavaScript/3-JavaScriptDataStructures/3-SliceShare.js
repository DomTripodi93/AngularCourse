
let myFirstArr = [
    "Some string", //0
    14, //1
    false, //2
    null, //3
    undefined, //4
    [
        "First", //0
        "Second", //1
        10 //2
    ], //5
    14, //6
    23 //7
]

// console.log(myFirstArr[3]);
// console.log(myFirstArr[5][1]);

// myFirstArr[3] = 17;
// myFirstArr[5][1] += " Third"

// console.log(myFirstArr[3]);
// console.log(myFirstArr[5][1]);

let myArrayCopy = myFirstArr;

console.log(myFirstArr);
console.log(myFirstArr[4]);

// myFirstArr.push("Value at the end");
// myFirstArr.splice(4, 2, "Added at the 4th index");
myFirstArr.pop();
let mySlice = myFirstArr.slice(3, 5);
myFirstArr.splice(3, 2);

console.log(myFirstArr);
console.log(myArrayCopy);
console.log(myFirstArr[4]);
console.log(mySlice);