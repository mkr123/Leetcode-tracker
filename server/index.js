const express = require('express');

const Problems = require('../database/Problems');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', function (req, res) {
  // TODO - your code here!
  Problems.find().limit(1000).then((data) => {
    console.log(data);
    res.send(data);
  });

  console.log(Problems)
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
