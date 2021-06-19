const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 8000;
var cors = require('cors');

app.use(cors());
app.use("/static", express.static('static'));
app.use(express.urlencoded());

<<<<<<< HEAD
 app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
  
=======
app.get('/', function (req, res) {
    console.log(res.headersSent) // false
    console.log(res.headersSent) // true
  })
  
  app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })

 
>>>>>>> 7ddc5d0ed29bea20c3476eb043e29beeb5c69850
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


server.listen(port, ()=> {
    console.log(`The Application is running successfully on port ${port}`);
});

