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

const server = app.listen(8080, () => {
    console.log("Listening on: http://localhost:8080")
})

function getUsers() {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
        console.log(fileResult);
    });
}
