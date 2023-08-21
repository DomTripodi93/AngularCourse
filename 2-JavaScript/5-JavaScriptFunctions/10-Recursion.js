
myRecursiveFunction(1);

function myRecursiveFunction(iteration) {
    console.log(iteration);
    if (iteration < 10) {
        myRecursiveFunction(iteration + 1);
    }
}


let myExternalBool = false;

function myDangerousRecursiveFunction() {
    if (myExternalBool) {
        console.log("Some chain of events starts here");
    } else {
        setTimeout(() =>{
            myDangerousRecursiveFunction();
        }, 10000)
    }
}
