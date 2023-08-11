let six = 6;
let five = 5;
let three = 3;
let sixString = "6";


console.log(six === +sixString ? "That was true" : "That was not true");
console.log(six === sixString ? "That was true" : "That was not true");

console.log(null ?? "Some default");
console.log(undefined ?? "Some default");
console.log("Original Value" ?? "Some default");
console.log("" ?? "Some default");

// if (six === sixString) {
//     console.log("This was true");
// } else if (six === +sixString) {
//     console.log("The else if was true")
// } else if (six == sixString) {
//     console.log("The second else if was true")
// } else {
//     console.log("All the previous statements were false")
// }

// if (six == sixString) {
//     console.log("This second if was true");
// } else {
//     console.log("This second if was not true")
// }
