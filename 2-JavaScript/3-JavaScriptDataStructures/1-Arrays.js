
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

console.log(myFirstArr[0]);
console.log(myFirstArr[3]);
console.log(myFirstArr[5][1]);

console.log(myFirstArr.length);
console.log(myFirstArr[myFirstArr.length - 1])

console.log(myFirstArr.at(0))
console.log(myFirstArr.at(3))
console.log(myFirstArr.at(-1))


console.log(myFirstArr.indexOf(14))
console.log(myFirstArr.indexOf(24))