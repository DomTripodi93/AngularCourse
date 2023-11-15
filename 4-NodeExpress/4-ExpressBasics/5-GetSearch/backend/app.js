import express from "express";
import fs from "fs";

// const express = require("express");

const app = express();

app.get("/", (req, res) => {
        res.send("Hello Angular Devs!")
        // return "Hello Angular Devs!";
    })
    .get("/user/users", getUsers)
    .get("/user/userSingle/:userId", getSingleUser)
    .get("/user/userSearch/:searchText", getUserSearch)

console.log("test")

app.listen(3000, ()=>{
    console.log("Listening at: http://localhost:3000")
})

function getUsers(req, res) {
    fs.readFile("users.json", { encoding: "utf-8" }, (err, results) => {
        // console.log(results);
        let userList = JSON.parse(results);
        res.send(userList);
    })
}

function getSingleUser(req, res) {
    fs.readFile("users.json", { encoding: "utf-8" }, (err, results) => {
        let userId = +req.params.userId;
        // "6"
        // 6
        // console.log(results);
        let userList = JSON.parse(results);
        
        let singleUser = userList.filter(row => {
            return row.userId === userId;
        })[0]

        res.send(singleUser);
    })
}

function getUserSearch(req, res) {
    fs.readFile("users.json", { encoding: "utf-8" }, (err, results) => {
        let searchText = req.params.searchText.toLowerCase();
        
        let userList = JSON.parse(results);
        
        let searchedUsers = userList.filter(row => {
            return row.fullName.toLowerCase().includes(searchText);
        })

        res.send(searchedUsers);
    })
}
