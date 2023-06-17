
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

let matchType = (six === stringSix) ? "match" : "no match"

console.log(matchType);

let matchTypeMulti = (six === stringSix) ? "match" : 
    (six === +stringSix) ? "numeric match" : "no match"

console.log(matchTypeMulti);
