let elephant = "Elephants";

switch (elephant){
    case "elephant":
        console.log("elephant");
        break;
    case "Elephant":
        console.log("Elephant");
        break; //If there is no break, we will keep searching
    case "Elephant":
        console.log("Elephant #2");
        break;
    default:
        console.log("default")
        break;
}

console.log("some next line");