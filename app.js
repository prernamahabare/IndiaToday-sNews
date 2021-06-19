const express = require("express");
const app = express();
const port = process.env.PORT || 80;
var cors = require('cors');

app.use(cors());
app.use("/static", express.static('static'));
//app.use(express.urlencoded());
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

// app.get('/', function (req, res) {
//   console.log(res.headersSent) // false
//   console.log(res.headersSent) // true
// })
<<<<<<< HEAD

// app.listen(80, function () {
//     console.log('CORS-enabled web server listening on port 80');
// })

// app.get('/', function (req, res) {
//     console.log(res.headersSent) // false
//     console.log(res.headersSent) // true
// })
=======
>>>>>>> 2b264647cee68fb2a3909002ff96ade4678611c1

// app.get('/', function (req, res) {
//     console.log(res.headersSent) // false
//     console.log(res.headersSent) // true
// })
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log(`The Application is running successfully on port ${port}`);
});

