const express = require("express");
const app = express();
const http = require('http');
const path = require('path');
<<<<<<< HEAD
const server = http.createServer(app);
const port = process.env.PORT || 5000;
=======
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 5500;
>>>>>>> 14f593f5889c476b1ce1928e712df53d090fe7c8

app.use("/static", express.static('static'));
app.use(express.urlencoded());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


server.listen(port, ()=> {
    console.log(`The Application is running successfully on port ${port}`);
});

