
try {
    console.log("Clean");
    throw "Some Error";
} catch {
    console.log("There was an error");
} finally {
    console.log("Finally");
}

console.log("some next line");