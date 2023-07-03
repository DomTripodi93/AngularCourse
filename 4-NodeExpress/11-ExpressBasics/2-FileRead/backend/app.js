const express = require('express');
const fs = require('fs');
const app = express();

app
    .get("/", (req, res) => {
        res.send("Hello Angular Devs!");
    })
    .get("/user/users", (req, res) => {
        getUsers();
    })

const server = app.listen(3000, () => {
    console.log("Listening on: http://localhost:3000")
})

function getUsers() {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
        console.log(fileResult);
    });
}
