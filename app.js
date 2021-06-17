const express = require("express");
const fs = require("fs");
const app = express();
const bodyparser = require("body-parser");
const port = 5000;

app.use("/static", express.static('static'));
app.use(express.urlencoded());

app.use(favicon(path.join(__dirname, 'src', 'icon.ico')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, ()=> {
    console.log(`The Application is running successfully on port ${port}`);
});

