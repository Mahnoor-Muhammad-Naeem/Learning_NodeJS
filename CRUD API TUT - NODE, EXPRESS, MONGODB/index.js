// console.log("Hello there");
// run project: terminal cmd: npm run serve
const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});