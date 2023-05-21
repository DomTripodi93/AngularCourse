

//IIFE
//Immediately Invoked Function Expression


// doAThing();

(function doAThing() {
// const doAThing = () => {
    console.log("called");
})();


;(() => {
// ;(function() {
// (() => {
// (function() {
    console.log("anonymous");
})();
