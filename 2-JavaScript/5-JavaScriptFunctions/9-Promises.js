
// let myFirstPromise = new Promise((resolve) => {
//     console.log("This is inside of the promise");
//     setTimeout(() =>{
//         console.log("The timeout is done");
//         resolve();
//     }, 2000)
// })

// console.log("This is after the promise has started");

// myFirstPromise.then(() => {
//     console.log("The promise is resolved");
// })


// console.log("this is at the end");


myAsyncFunc();

async function myAsyncFunc() {
    let myFirstPromise = new Promise((resolve) => {
        console.log("This is inside of the promise");
        setTimeout(() =>{
            console.log("The timeout is done");
            resolve();
        }, 2000)
    })
    
    console.log("This is after the promise has started");
    
    // myFirstPromise.then(() => {
    //     console.log("The promise is resolved");
    // })
    
    
    // console.log("this is at the end");
    await myFirstPromise;
    console.log("this is at the end");
}
