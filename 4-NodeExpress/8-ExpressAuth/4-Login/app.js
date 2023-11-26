import express from "express";
import fs from "fs";
import cors from "cors";
import crypto from "crypto";

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
    // .post("/user/addUser", addNewUser)
    .put("/user/editUser", editUser)
    .delete("/user/deleteUser/:userId", deleteUser)
    .post("/auth/register", registerNewUser)
    .post("/auth/login", loginUser)

console.log("test")

app.listen(3000, () => {
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

function registerNewUser(req, res) {
    fs.readFile("users.json", { encoding: "utf-8" }, (err, results) => {
        let userList = JSON.parse(results);
        let { password, passwordConfirm, ...newUser } = req.body;

        let usernameIsUnique = userList.filter(row => {
            return row.username.toLowerCase() === newUser.username.toLowerCase();
        }).length === 0;

        if (usernameIsUnique && password === passwordConfirm) {
            let salt = crypto.randomBytes(8).toString("hex");
            getHash(password, salt).then(passwordHash => {
                let authObject = {
                    username: newUser.username,
                    passwordHash: passwordHash,
                    passwordSalt: salt
                }
                Promise.all([
                    addUserToFile(userList, newUser), 
                    addAuthObjectToFile(authObject)
                ]).then(fileWriteResponse =>{
                    if (fileWriteResponse[0] && fileWriteResponse[1]) {
                        res.send(fileWriteResponse[0]);
                    } else {
                        res.send({ "message": "Failed to save registration to file!" })
                    }
                })
            })
            // addUserToFile(userList, newUser);
        } else {
            if (password !== passwordConfirm) {
                res.send({ "message": "Your password and password confirm do not match!" })
            } else { // !usernameIsUnique
                res.send({ "message": "User with username already exists!" })
            }
        }


    })
}

function addAuthObjectToFile(newAuthObject) {
    return new Promise(resolve => {

        fs.readFile("auth.json", { encoding: "utf-8" }, (err, results) => {
            let authList = JSON.parse(results);
            authList.push(newAuthObject);

            let authListText = JSON.stringify(authList);

            writeToFile("auth.json", authListText).then(didWriteToFile => {
                if (didWriteToFile) {
                    resolve(newAuthObject)
                } else {
                    resolve(false);
                }
            })
        })
    })
}

function addUserToFile(userList, newUser) {
    return new Promise(resolve => {
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
                resolve(newUser)
            } else {
                resolve(false);
            }
        })
    })
}

function getHash(password, salt) {
    return new Promise(resolve => {
        let keyLength = 20;
        let iterations = 600000
        crypto.pbkdf2(
            password,
            salt,
            iterations,
            keyLength,
            "sha512",
            (err, derivedKey) => {
                if (err) {
                    console.log(err);
                    resolve(err);
                } else {
                    let hash = derivedKey.toString("hex");
                    resolve(hash);
                }
            })
    })
}

// function addNewUser(req, res) {
//     fs.readFile("users.json", { encoding: "utf-8" }, (err, results) => {
//         let userList = JSON.parse(results);

//         let newUser = req.body;

//         let usernameIsUnique = userList.filter(row => {
//             return row.username.toLowerCase() === newUser.username.toLowerCase();
//         }).length === 0;

//         if (usernameIsUnique) {
//             //Set the userId
//             userList.sort((a, b) => {
//                 return a.userId > b.userId ? 1 : -1;
//             })

//             let latestUserId = userList[userList.length - 1].userId;

//             newUser.userId = latestUserId + 1;


//             userList.push(newUser);

//             let userListText = JSON.stringify(userList);

//             writeToFile("users.json", userListText).then(didWriteToFile => {
//                 if (didWriteToFile) {
//                     res.send({"message": "Request was successful"});
//                 } else {
//                     res.send({"message": "Request failed to save"});
//                 }
//             })
//         } else {
//             res.send({"message": "User with username already exists!"})
//         }


//     })
// }


function editUser(req, res) {
    fs.readFile("users.json", { encoding: "utf-8" }, (err, results) => {
        let userList = JSON.parse(results);

        let userForEdit = req.body;

        let userId = userForEdit.userId

        let usernameIsUnique = userList.filter(row => {
            return row.username.toLowerCase() === userForEdit.username.toLowerCase()
                 && row.userId !== userId;
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
                    res.send({ "message": "Request was successful" });
                } else {
                    res.send({ "message": "Request failed to save" });
                }
            })
        } else {
            res.send({ "message": "User with username already exists!" })
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
                res.send({ "message": "Request was successful" });
            } else {
                res.send({ "message": "Request failed to save" });
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

function loginUser(req, res) {
    fs.readFile("auth.json", { encoding: "utf-8" }, (err, results) => {
        let authList = JSON.parse(results);
        let {username, password} = req.body;
        // let password = req.body.password
        let relatedAuthObjects = authList.filter(row =>{
            return row.username.toLowerCase() === username.toLowerCase();
        });
        if (relatedAuthObjects.length > 0) {
            let authObject = relatedAuthObjects[0];
            getHash(password, authObject.passwordSalt).then(hashResponse =>{
                if (hashResponse === authObject.passwordHash) {
                    res.send({"message":"You have successfully logged in!"})
                } else {
                    res.status(401).send({"message":"Username and password combination is not valid!"});
                }
            })
        } else {
            res.status(401).send({"message":"Username does not exist!"});
        }
    })

}