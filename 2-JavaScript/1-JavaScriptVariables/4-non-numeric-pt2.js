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


let myBoolean = true;

console.log(myBoolean);
console.log(typeof(myBoolean));


let noValue;
let nullValue = null;
let undefinedValue = undefined;
let emptyString = "";

console.log(!!noValue);
console.log(noValue);
console.log(typeof(noValue));

console.log(!!nullValue);
console.log(nullValue);
console.log(typeof(nullValue));

console.log(!!undefinedValue);
console.log(undefinedValue);
console.log(typeof(undefinedValue));

console.log(!!emptyString);
console.log(emptyString);
console.log(typeof(emptyString));