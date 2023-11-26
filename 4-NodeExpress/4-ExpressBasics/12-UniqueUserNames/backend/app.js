import express from "express";
import fs from "fs";
import cors from "cors";

// const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
        res.send("Hello Angular Devs!")
        // return "Hello Angular Devs!";
    })
    .get("/user/users", getUsers)
    .get("/user/userSingle/:userId", getSingleUser)
    .get("/user/userSearch/:searchText", getUserSearch)
    .post("/user/addUser", addNewUser)
    .put("/user/editUser", editUser)
    .delete("/user/deleteUser/:userId", deleteUser)

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

function addNewUser(req, res) {
    fs.readFile("users.json", { encoding: "utf-8" }, (err, results) => {
        let userList = JSON.parse(results);

        let newUser = req.body;

        let usernameIsUnique = userList.filter(row => {
            return row.username === newUser.username;
        }).length === 0;

        if (usernameIsUnique) {
            //Set the userId
            userList.sort((a, b) => {
                return a.userId > b.userId ? 1 : -1;
            })
    
            let latestUserId = userList[userList.length - 1].userId;
    
            newUser.userId = latestUserId + 1;
    
    
            userList.push(newUser);
    
            let userListText = JSON.stringify(userList);
    
            writeToFile("users.json", userListText).then(didWriteToFile => {
                if (didWriteToFile) {
                    res.send({"message": "Request was successful"});
                } else {
                    res.send({"message": "Request failed to save"});
                }
            })
        } else {
            res.send({"message": "User with username already exists!"})
        }


    })
}


function editUser(req, res) {
    fs.readFile("users.json", { encoding: "utf-8" }, (err, results) => {
        let userList = JSON.parse(results);

        let userForEdit = req.body;

        let userId = userForEdit.userId

        let usernameIsUnique = userList.filter(row => {
            return row.username === userForEdit.username && row.userId !== userId;
        }).length === 0;

        if (usernameIsUnique) {
            let userListEdited = userList.filter((row) => {
                return row.userId !== userId;
            })
    
            userListEdited.push(userForEdit);
            
            //Sort before we save
            userListEdited.sort((a, b) => {
                return a.userId > b.userId ? 1 : -1;
            })
    
            let userListText = JSON.stringify(userListEdited);
    
            writeToFile("users.json", userListText).then(didWriteToFile => {
                if (didWriteToFile) {
                    res.send({"message": "Request was successful"});
                } else {
                    res.send({"message": "Request failed to save"});
                }
            })
        } else {
            res.send({"message": "User with username already exists!"})
        }


    })
}


function deleteUser(req, res) {
    fs.readFile("users.json", { encoding: "utf-8" }, (err, results) => {
        let userList = JSON.parse(results);

        let userId = +req.params.userId
        // console.log("Request User Id: " + userId);

        let userListAfterDelete = userList.filter((row) => {
            // if (row.userId === 5) {
            //     console.log("Explicitly Equal: " + (row.userId === userId))
            //     console.log("Implicitly Equal: " + (row.userId == userId))
            // }
            return row.userId !== userId;
        })
        // console.log("Length of original list: " + userList.length);
        // console.log("Length of filtered list: " + userListAfterDelete.length);

        let userListText = JSON.stringify(userListAfterDelete);

        writeToFile("users.json", userListText).then(didWriteToFile => {
            if (didWriteToFile) {
                res.send({"message": "Request was successful"});
            } else {
                res.send({"message": "Request failed to save"});
            }
        })

    })
}

function writeToFile(fileName, fileText) {
    return new Promise((resolve) => {
        fs.writeFile(fileName, fileText, (err) => {
            if (err) {
                console.log(err);
                // resolve(err);
                resolve(false);
            } else {
                // resolve(fileText);
                resolve(true);
            }
        })
    })
}
