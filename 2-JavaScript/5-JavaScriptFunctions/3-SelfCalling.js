

doAThing();
doAThing();
doAThing();

// doADifferentThing();


function doAThing() {
    console.log("Doing a thing");
}

const doADifferentThing = () => {
    console.log("Doing a different thing");
}

doADifferentThing();


(() => {
    console.log("Doing an immediate thing");
})();


(function doAThingImmediately() {
    console.log("Doing an immediate thing with the function keyword");
})();

// doAThingImmediately();

// IIFE
// Immediately Invoked Function Expression