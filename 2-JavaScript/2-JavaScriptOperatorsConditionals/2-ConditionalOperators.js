
let six = 6
let three = 3
let stringSix = "6"

console.log(six > three);
console.log(six < three);
console.log(six == three);

console.log(six == stringSix);
console.log(six === stringSix);
console.log(six !== stringSix);
console.log(six === +stringSix);

let today = new Date()
let todayTwo = new Date()
let yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000))

console.log(today > yesterday)
console.log(today < yesterday)
console.log(today == todayTwo)
console.log(today !== todayTwo)
console.log(today === todayTwo)

let letterA = "a"
let letterB = "b"

console.log(letterA > letterB)
console.log(letterA < letterB)
console.log(letterA === letterB)
console.log(letterA !== letterB)
console.log(letterA == "a")
console.log(letterA === "a")
