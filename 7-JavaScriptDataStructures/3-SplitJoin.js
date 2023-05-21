
let stringToSplit = "some kind of sentence with random words";

let splitSentence = stringToSplit.split(" ");

console.log(splitSentence);
console.log("\n");


// let differentSplit = stringToSplit.split("s");
let differentSplit = stringToSplit.split("sentence");

console.log(differentSplit);
console.log("\n");


let rejoinedWithCommas = splitSentence.join(", ");

console.log(rejoinedWithCommas);
console.log("\n");

console.log(stringToSplit.replace(" ", ", "));
console.log("\n");
