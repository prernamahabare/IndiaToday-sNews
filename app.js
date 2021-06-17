const express = require("express");
const fs = require("fs");
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();
const bodyparser = require("body-parser");
const port = 5000;

app.use("/static", express.static('static'));
app.use(express.urlencoded());

<<<<<<< HEAD
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
=======
>>>>>>> 25695d837f240f7d7ee89b57d3d3238359fe26da

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, ()=> {
    console.log(`The Application is running successfully on port ${port}`);
});

