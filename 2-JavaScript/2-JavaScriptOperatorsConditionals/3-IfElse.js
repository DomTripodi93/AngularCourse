let six = 6;
let five = 5;
let three = 3;
let sixString = "6";


console.log(six === sixString);

if (six === sixString) {
    console.log("This was true");
} else if (six === +sixString) {
    console.log("The else if was true")
} else if (six == sixString) {
    console.log("The second else if was true")
} else {
    console.log("All the previous statements were false")
}

if (six == sixString) {
    console.log("This second if was true");
} else {
    console.log("This second if was not true")
}
