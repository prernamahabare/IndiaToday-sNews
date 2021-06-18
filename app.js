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
<<<<<<< HEAD
    console.log(res.headersSent) // false
    res.send(xhr.send());
    console.log(res.headersSent) // true
  })

app.get('/products/:id', function (req, res, next) {
    res.json('This is CORS-enabled for all origins!');
  })
  
  app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
=======
  console.log(res.headersSent) // false
  res.send(xhr.send());
  console.log(res.headersSent) // true
})
>>>>>>> 0fc45e3626687e355563ef0822d3b319a596e8cf


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


server.listen(port, ()=> {
    console.log(`The Application is running successfully on port ${port}`);
});

