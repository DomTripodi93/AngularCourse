
let five = 5;
let three = 3;

// Use an if else statement to check whether 5 is less than or greater than 3
//// If 5 is less, log "less than", if it is greater log "greater than"
if (five < three) {
    console.log("less than");
} else {
    console.log("greater than")
}


let giraffe = "Giraffe";
let giraffeLower = "giraffe";
let nullAnimal = null;
let randomAnimal = "lion";


// Use a ternary expression to check if giraffe and giraffeLower are equal 
//// Log "equal" if they are equal, or "not equal" if they are not equal
console.log(giraffe === giraffeLower ? "equal" : "not equal");

// Use a ternary expression to check if giraffe converted to lowercase and giraffeLower are equal
//// Log "equal" if they are equal, or "not equal" if they are not equal
console.log(giraffe.toLowerCase() === giraffeLower ? "equal" : "not equal");

// Use a switch case statement to check if our randomAnimal variable is an "elephant" or a "giraffe"
//// Log "elephant", "giraffe" or default "random animal" don't forget to "break;" after each case's code block
switch (randomAnimal){
    case "elephant":
        console.log("elephant");
        break;
    case "giraffe":
        console.log("giraffe");
        break; 
    default:
        console.log("random animal")
        break;
}
