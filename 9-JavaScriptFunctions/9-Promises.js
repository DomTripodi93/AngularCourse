
(function runLoop() {
// (async function runLoop() {
    let loopThrough = [1, 5, 3, "x"]
    
    // loopThrough.forEach((value, i) =>{
    //     setTimeout(() =>{
    //         console.log(value)
    
    //         if (i === loopThrough.length - 1) {
    //             console.log("done");
    //         }
    //     }, 10)
    // })
    
    let loopPromise = new Promise(resolve => {
        loopThrough.forEach((value, i) =>{
            setTimeout(() =>{
                console.log(value)
                if (i === loopThrough.length - 1) {
                    console.log("done");
                    resolve();
                }
            }, 10)
        })
    })
    
    // await loopPromise

    loopPromise.then(()=>{
        console.log("done - end");
    })
    
})();
