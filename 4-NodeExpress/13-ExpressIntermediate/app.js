const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json())

app
    .get("/", (req, res) => {
        res.send("Hello Angular Devs!");
    })
    .get("/users", (req, res) => {
        // const users = getUsers();
        // console.log(users)
        // res.send(users);
        getUsers(res);
    })
    .get("/userSingle/:userId", (req, res) => {
        getUsersSingle(req, res);
    })
    .get("/userSearch/:fullName", (req, res) => {
        getUsersSearch(req, res);
    })
    .post("/userAdd", (req, res) => {
        addNewUser(req, res);
    })
    .put("/userEdit", (req, res) => {
        editUser(req, res);
    })
    .delete("/userDelete/:userId", (req, res) => {
        deleteUser(req, res);
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

function getUsersSingle(req, res) {
    fs.readFile("users.json", { encoding: 'utf-8' }, (err, fileResult) => {
        console.log(req);
        let userList = JSON.parse(fileResult);
        // let singleUser = userList.filter(record =>{
        //     return record.userId === req.params.userId
        // })[0]
        let singleUser = getUserById(userList, +req.params.userId)
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
        console.log(typeof (req.body));
        let newUser = req.body;
        newUser.userId = userList[userList.length - 1].userId + 1;
        console.log(newUser)
        userList.push(req.body);

        writeUserFile(userList, res);
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

        writeUserFile(userList, res);
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

        writeUserFile(userList, res);
    });
}

function writeUserFile(updatedData, res) {
    fs.writeFile("users.json", JSON.stringify(updatedData), (err) => {
        res.send(updatedData);
    });
}

function getUserById(userList, +userId) {
    return userList.filter(record => {
        return record.userId === userId
    })[0]
}