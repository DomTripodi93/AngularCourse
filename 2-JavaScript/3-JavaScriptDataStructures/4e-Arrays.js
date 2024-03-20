let stringToSplit = "This is the first sentence~This is the last sentence";

// Use different methods of declaring and editing arrays to accomplish the tasks below


//Separate the two sentences in stringToSplit as two members of a new array called sentencesArray
let sentencesArray = stringToSplit.split("~");

console.log(JSON.stringify(sentencesArray));


//Add the middleSentence to the middle of the array
let middleSentence = "This is the middle sentence";

sentencesArray.splice(1, 0, middleSentence);

console.log(JSON.stringify(sentencesArray));


//Combine the 3 sentences together with a semicolon ";" into the variable allThreeSentences
let allThreeSentences = sentencesArray.join(";");

console.log(allThreeSentences);


//Remove the last item from the sentencesArray
sentencesArray.pop();

console.log(JSON.stringify(sentencesArray));


//Store the 2nd and 3rd items in the numberArray in a new variable called numberArraySlice
let numberArray = [
    5,
    40,
    54,
    43,
    12,
    32
]

let numberArraySlice = numberArray.slice(1,3);

console.log(JSON.stringify(numberArraySlice));


//Remove the 2nd and 3rd item from the numberArray
numberArray.splice(1,2);

console.log(JSON.stringify(numberArray));

