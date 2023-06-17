
let someRandomValue = "Elephant";

switch (someRandomValue){
    case "elephant":
        console.log("elephant");
        break;
    case "Elephant":
        console.log("Elephant");
        // break; //Without break it will keep checking for more matches
    case "Elephant":
        console.log("Elephant #2");
        break; //Without break it will keep checking for more matches
    default:
        console.log("no match")
        break;
}
