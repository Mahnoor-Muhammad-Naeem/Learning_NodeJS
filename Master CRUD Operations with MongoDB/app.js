const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey");
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "mahnoor",
        email: "mahnoormuhammadnaeem99@gmail.com",
        username: "mahnoor"
    })

    res.send(createduser);
})

app.get("/read", (req, res) => {
    let users = await userModel.find();
    res.send(users);
})

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "mahnoor"}, {name: "mahnoor"}, {new: "true"})
    res.send(updateduser);
})


app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "mahnoor"})
    res.send(users);
})

app.listen(3000);