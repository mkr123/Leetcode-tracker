const express = require('express');

const Problems = require('../database/Problems');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist/'));
console.log(__dirname + '/client/dist/')
app.get('/problems', function (req, res) {
  Problems.find().limit(10).sort({leetcodeID:-1}).then((data) => {

    res.send(data);
  });

});
app.get('/search',(req,res)=>{
  let word = `\"${req.query.input}\"`;
  Problems.find({$text:{$search:word}}).then((data)=>{
    res.send(data);
  })
})
app.post('/add',(req,res)=>{
let obj = req.body;
Problems.insert(obj).catch((err)=>{console.log(err,"from post api")})
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
