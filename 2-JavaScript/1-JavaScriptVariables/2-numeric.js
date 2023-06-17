var myInteger = 17
//var - Not recommended - strange issues with scope 
//Can be changed or 
////Scoped to a function or globally scoped, meaning they are used often accidentally instead of a new variable

let myDecimal = 12.547
//let - Can be changed or redeclared, block scope
////block scope means that if you are not in directly the same code block this will be a whole new variable, not overwrite an existing variable

const myInacurateCalculation = .751 - .75
//const - Cannot be changed or redeclared, block scope
////block scope means that if you are not in directly the same code block this will be a whole new variable, not overwrite an existing variable

//JavaScript decimal calculation issues
////Commonly called a double, the JavaScript number type is a 64 bit value, which is not precise enough for certain calculations


console.log(myInteger)
myInteger = 25
console.log(myInteger)
console.log(typeof(myInteger))

console.log(myDecimal)
myInteger = 25.981
console.log(myDecimal)
console.log(typeof(myDecimal))

console.log(myInacurateCalculation)
console.log(typeof(myInacurateCalculation))