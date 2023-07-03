const express = require('express');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const fs = require('fs');
const app = express();

const tokenKey = "2359n1785fv1238f1-2358fc125!@#%F!@#5f12c53d2d1235"; //This is our token key

app
    .use(express.json())
    .use("", setCORS)
    .get("/", (req, res) => {
        res.send("Hello Angular Devs!");
    })
    .post("/auth/register", (req, res) => {
        postRegistration(req, res);
    })
    .post("/auth/login", (req, res) => {
        postLogin(req, res);
    })

app
    .use("", checkAuth)
    .get("/user/users", (req, res) => {
        // const users = getUsers();
        // console.log(users)
        // res.send(users);
        getUsers(res);
    })
    .get("/user/userSingle/:userId", (req, res) => {
        getSingleUser(req, res);
    })
    .get("/user/self", (req, res) => { //myUser, myProfile, etc.
        // getSelfUser(req, res);
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
    .get("/auth/updateToken", (req, res) => {
        updateToken(req, res);
    })
    .get("/post/posts", (req, res) => {
        getPosts(res);
    })
    .get("/post/postsByUser/:userId", (req, res) => {
        getPostsByUser(req, res);
    })
    .get("/post/myPosts", (req, res) => {
        getPostsByUser(req, res);
    })

const server = app.listen(3000, () => {
    console.log("Listening on: http://localhost:3000")
})

function setCORS(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
}

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
    // fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
    //     // console.log(req);
    //     let userList = JSON.parse(fileResult);
    //     // let singleUser = userList.filter(record =>{
    //     //     return record.userId === req.params.userId
    //     // })[0]
    //     let singleUser = getUserById(userList, req.params.userId)
    //     res.send(singleUser);
    // });
    let userId = "";
    if (req.params?.userId) {
        userId = req.params.userId
    } else {
        userId = req.userId
    }
    getSingleUserFromFile(userId).then(singleUser => {
        res.send(singleUser);
    })
}

// function getSelfUser(req, res) {
//     getSingleUserFromFile(req.userId).then(singleUser => {
//         res.send(singleUser);
//     })
// }

function getSingleUserFromFile(userId) {
    return new Promise(resolve => {
        fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
            // console.log(req);
            let userList = JSON.parse(fileResult);
            // let singleUser = userList.filter(record =>{
            //     return record.userId === req.params.userId
            // })[0]
            // let singleUser = getUserById(userList, req.params.userId)
            let singleUser = getUserById(userList, +userId)
            // res.send(singleUser);
            resolve(singleUser);
        });
    })
}

function getUsersSearch(req, res) {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
        let userList = JSON.parse(fileResult);
        let userListFiltered = userList.filter(record => {
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

        const userFromFile = getUserById(userList, +req.body.userId)
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

        const userFromFile = getUserById(userList, +req.params.userId)
        let userIndex = userList.indexOf(userFromFile);
        // console.log(userFromFile)

        // console.log(userIndex);
        userList.splice(userIndex, 1)
        // console.log(userList)

        // writeUserFile(userList, res);
        writeFile(userList, "users").then(() => {
            // res.send(req.params.userId);
            fs.readFile("auth.json", { encoding: 'utf-8' }, (err, authResult) => {
                let authList = JSON.parse(authResult);
                let authForUser = authList.filter(row => {
                    return row.username === userFromFile.username;
                })[0];

                let authIndex = authList.indexOf(authForUser);
                authList.splice(authIndex, 1)

                writeFile(authList, "auth").then(() => {
                    res.send({ deleted: req.params.userId });
                })
            })

        })
    });
}

// function writeUserFile(updatedData, res) {
// function writeUserFile(updatedData) {
function writeFile(updatedData, fileName) {
    // console.log(updatedData)
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

function getUserById(userList, userId) {
    return userList.filter(record => {
        return record.userId === userId
    })[0]
}

function postRegistration(req, res) {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, userFile) => {
        let userList = JSON.parse(userFile);
        let userMatches = userList.filter(record => {
            return record.username === username;
        })
        if (userMatches.length === 0) {
            fs.readFile("auth.json", { encoding: 'utf-8' }, (err, authFile) => {
                let authList = JSON.parse(authFile);
                let userForRegister = req.body;
                if (userForRegister.auth.password === userForRegister.auth.passwordConfirm) {
                    // console.log(userForRegister)
                    let salt = crypto.randomBytes(128).toString('base64');
                    getHash(userForRegister.auth.password, salt).then(hash => {
                        const user = {
                            username: userForRegister.user.username,
                            passwordSalt: salt,
                            passwordHash: hash
                        }
                        authList.push(user);
                        writeFile(authList, "auth").then(() => {
                            let reqClone = { ...req };
                            reqClone.body = req.body.user;
                            addNewUser(reqClone, res);
                        })
                    })
                }
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

function postLogin(req, res) {
    fs.readFile("auth.json", { encoding: 'utf-8' }, (err, authFile) => {
        let authList = JSON.parse(authFile);
        try {
            let userForAuth = req.body;
            let authFromFile = authList.filter(row => {
                return row.username.toLowerCase() === userForAuth.username.toLowerCase();
            })[0]
            getHash(userForAuth.password, authFromFile.passwordSalt).then(attemptHash => {
                if (authFromFile.passwordHash === attemptHash) {
                    // res.send({ message: "Success: Login Successful" });
                    fs.readFile("users.json", { encoding: 'utf-8' }, (err, userFile) => {
                        let userList = JSON.parse(userFile);
                        let userFromFile = userList.filter(row => {
                            return row.username.toLowerCase() === userForAuth.username.toLowerCase();
                        })[0]

                        const token = createToken(userFromFile)
                        // const token = jwt.sign(
                        //     {
                        //         userId: userFromFile.userId,
                        //         username: userFromFile.username,
                        //         fullName: userFromFile.fullName,
                        //         favoriteColor: userFromFile.favoriteColor
                        //     },
                        //     tokenKey,
                        //     {
                        //         expiresIn: "24h"
                        //     }
                        // );

                        res.send({
                            token: token
                        });
                    })
                } else {
                    res.status(401).json({ message: "Unauthorized: Login Failed" });
                }
            })
        } catch {
            res.status(500).json({ message: "Failed to find user for token"});
        }
    })
}

function updateToken(req, res) {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, userFile) => {
        let userList = JSON.parse(userFile);
        let userFromFile = getUserById(userList, +req.userId)
        const token = createToken(userFromFile)

        return res.send({
            token: token
        });
    })
}

function createToken(userFromFile) {
    return jwt.sign(
        {
            userId: userFromFile.userId,
            username: userFromFile.username,
            fullName: userFromFile.fullName,
            favoriteColor: userFromFile.favoriteColor
        },
        tokenKey,
        {
            expiresIn: "24h"
        }
    );
}

function checkAuth(req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    } else {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, tokenKey);
            req.userId = decodedToken.userId;
            req.username = decodedToken.username;
            req.fullName = decodedToken.fullName;
            next();
        } catch (error) {
            res.status(401).json({ message: "Unauthorized: No Valid Token" });
        }
    }
};


function getPosts(res) {
    fs.readFile("posts.json", { encoding: 'utf-8' }, (err, fileResult) => {
        let postList = JSON.parse(fileResult);
        res.send(postList);
    });
}

function getPostsByUser(req, res) {
    let username = "";
    if (req.params?.username) {
        username = req.params.username
    } else {
        username = req.username
    }
    fs.readFile("posts.json", { encoding: 'utf-8' }, (err, fileResult) => {
        let postList = JSON.parse(fileResult);
        let postsForUser = postList.filter(record => {
            return record.username.toLowerCase() === username.toLowerCase()
        })
        res.send(postsForUser);
    });
}
