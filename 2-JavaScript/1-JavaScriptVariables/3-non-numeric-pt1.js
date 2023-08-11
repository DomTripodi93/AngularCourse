let myString = "Hello World!";
let myFirstDate = new Date();
// let myParsedDateValue = Date.parse("2023-10-15");
// let myParsedDate = new Date(myParsedDateValue);
let myParsedDate = new Date(Date.parse("2023-10-15"));

console.log(myString);
console.log(typeof(myString));

console.log(myFirstDate);
console.log(typeof(myFirstDate));

console.log(myParsedDate);
console.log(typeof(myParsedDate));