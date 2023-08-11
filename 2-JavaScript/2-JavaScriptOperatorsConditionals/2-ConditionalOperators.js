let six = 6;
let five = 5;
let three = 3;
let sixString = "6";


console.log("6 > 3");
console.log(sixString > three);
console.log("6 < 3");
console.log(sixString < three);
console.log("6 < 6");
console.log(six < six);
console.log("6 <= 6");
console.log(six <= six);
console.log("6 >= 6");
console.log(six >= sixString);

console.log("double ==");
console.log(six == sixString);
console.log("triple ===");
console.log(six === sixString);

console.log("Not Equal !==");
console.log(six !== sixString);


console.log("Not double ==")
console.log(!(six == sixString));


let stringA = "a";
let stringACapitalized = "A";
let stringB = "b";


console.log("a > b");
console.log(stringA > stringB);
console.log("a < b");
console.log(stringA < stringB);
console.log("triple ===");
console.log(stringA === stringACapitalized.toLowerCase());
console.log("triple ===");
console.log(stringA.toUpperCase() === stringACapitalized);

console.log(stringACapitalized);