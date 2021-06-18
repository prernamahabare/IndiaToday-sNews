const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 8000;
var cors = require('cors');

app.use(cors());
app.use("/static", express.static('static'));
app.use(express.urlencoded());

app.get('/', function (req, res) {
  console.log(res.headersSent) // false
<<<<<<< HEAD
  res.send(xhr.send());
=======
>>>>>>> 26f0eb97de00e80c79e7be6c4cfa91347f4f2412
  console.log(res.headersSent) // true
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


server.listen(port, ()=> {
    console.log(`The Application is running successfully on port ${port}`);
});

