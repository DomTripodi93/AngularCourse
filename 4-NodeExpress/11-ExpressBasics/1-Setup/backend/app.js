const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello Angular Devs!");
})

const server = app.listen(8080, () =>{
    console.log("Listening on: http://localhost:8080")
})