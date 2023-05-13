
let six = 6
let three = 3
let stringSix = "6"

if (six === stringSix) {
    console.log("match")
} else if (six === +stringSix) {
    console.log("numeric match")
} else {
    console.log("no match")
}
