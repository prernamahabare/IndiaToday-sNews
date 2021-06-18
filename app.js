const express = require("express");
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const port = process.env.PORT || 5000;


app.use("/static", express.static('static'));
app.use(express.urlencoded());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


server.listen(port, ()=> {
    console.log(`The Application is running successfully on port ${port}`);
});

