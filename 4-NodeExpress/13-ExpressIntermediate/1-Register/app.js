const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const app = express();

app.use(express.json())

app
    .get("/", (req, res) => {
        res.send("Hello Angular Devs!");
    })
    .get("/user/users", (req, res) => {
        // const users = getUsers();
        // console.log(users)
        // res.send(users);
        getUsers(res);
    })
    .get("/user/userSingle/:userId", (req, res) => {
        getSingleUser(req, res);
    })
    .get("/user/userSearch/:fullName", (req, res) => {
        getUsersSearch(req, res);
    })
    .post("/user/userAdd", (req, res) => {
        addNewUser(req, res);
    })
    .put("/user/userEdit", (req, res) => {
        editUser(req, res);
    })
    .delete("/user/userDelete/:userId", (req, res) => {
        deleteUser(req, res);
    })
    .post("/auth/register", (req, res) => {
        postRegistration(req, res);
    })

const server = app.listen(8080, () => {
    console.log("Listening on: http://localhost:8080")
})

// function getUsers() {
function getUsers(res) {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
        // console.log(fileResult);
        let userList = JSON.parse(fileResult);
        // return userList;
        res.send(userList);
    });
}

function getSingleUser(req, res) {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
        // console.log(req);
        let userList = JSON.parse(fileResult);
        // let singleUser = userList.filter(record =>{
        //     return record.userId === req.params.userId
        // })[0]
        let singleUser = getUserById(userList, +req.params.userId);
        res.send(singleUser);
    });
}

function getUsersSearch(req, res) {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
        let userList = JSON.parse(fileResult);
        let userListFiltered = userList.filter(record =>{
            return record.fullName.includes(req.params.fullName)
        })
        res.send(userListFiltered);
    });
}

function addNewUser(req, res) {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
        let userList = JSON.parse(fileResult);
        // console.log(req);
        // console.log(typeof (req.body));
        let newUser = req.body;
        newUser.userId = userList[userList.length - 1].userId + 1;
        // console.log(newUser)
        userList.push(req.body);

        // writeUserFile(userList, res);
        writeFile(userList, "users").then(() => {
            res.send(newUser);
        })
    });
}

function editUser(req, res) {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
        let userList = JSON.parse(fileResult);
        let userFromBody = req.body;

        const userFromFile = getUserById(userList, req.body.userId)
        let userIndex = userList.indexOf(userFromFile);
        // console.log(userIndex)

        userList.splice(userIndex, 1, userFromBody)

        // writeUserFile(userList, res);
        writeFile(userList, "users").then(() => {
            res.send(userFromBody);
        })
    });
}

function deleteUser(req, res) {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
        let userList = JSON.parse(fileResult);

        const userFromFile = getUserById(userList, +req.params.userId);
        let userIndex = userList.indexOf(userFromFile);
        // console.log(userFromFile)

        // console.log(userIndex);
        userList.splice(userIndex, 1)
        // console.log(userList)

        // writeUserFile(userList, res);
        writeFile(userList, "users").then(() => {
            // res.send(req.params.userId);
            res.send({ deleted: req.params.userId });
        })
    });
}

// function writeUserFile(updatedData, res) {
// function writeUserFile(updatedData) {
function writeFile(updatedData, fileName) {
    return new Promise(resolve => {
        // fs.writeFile("users.json", JSON.stringify(updatedData), (err) => {
        fs.writeFile(fileName + ".json", JSON.stringify(updatedData), (err) => {
            // res.send(updatedData);
            if (!err) {
                resolve();
            } else {
                console.log(err);
            }
        });
    })
}

function getUserById(userList, +userId) {
    return userList.filter(record => {
        return record.userId === userId
    })[0]
}

function postRegistration(req, res) {
    fs.readFile("auth.json", { encoding: 'utf-8' }, (err, authFile) => {
        let authList = JSON.parse(authFile);
        let userForRegister = req.body;
        if (userForRegister.auth.password === userForRegister.auth.passwordConfirm) {
            let salt = crypto.randomBytes(128).toString('base64');
            getHash(userForRegister.auth.password, salt).then(hash => {
                const user = {
                    username: userForRegister.auth.username,
                    passwordSalt: salt,
                    passwordHash: hash
                }
                authList.push(user);
                writeFile(authList, "auth").then(() => {
                    let reqClone = { ...req };
                    reqClone.body = req.body.userData;
                    addNewUser(reqClone, res);
                })
            })
        }
    })
}

function getHash(password, salt) {
    return new Promise(resolve => {
        let iterations = 10000;
        let keyLength = 64;

        crypto.pbkdf2(
            password,
            salt,
            iterations,
            keyLength,
            'sha512',
            (err, derivedKey) => {
                if (!err) {
                    let hash = derivedKey.toString('hex')
                    resolve(hash);
                } else {
                    console.log(err);
                }
            }
        );
    })
}

