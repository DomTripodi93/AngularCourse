
try {
    throw "Some Error"
    // } catch {
} catch (error) {
    console.log("An error occurred");
    console.log(error)
} finally {
    console.log("finally");
}

console.log("This is after the try-catch");