const express = require("express");
const fs = require("fs");
const http = require('http');
const path = require('path');
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 5500;

app.use("/static", express.static('static'));
app.use(express.urlencoded());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, ()=> {
    console.log(`The Application is running successfully on port ${port}`);
});

