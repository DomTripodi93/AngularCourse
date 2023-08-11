const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello Angular Devs!");
})

const server = app.listen(3000, () =>{
    console.log("Listening on: http://localhost:3000")
})