import express from "express"

// const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Angular Devs!")
    // return "Hello Angular Devs!";
})

console.log("test")

app.listen(3000, ()=>{
    console.log("Listening at: http://localhost:3000")
})