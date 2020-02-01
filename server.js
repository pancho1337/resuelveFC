const express = require('express');

const app = express();
var data = require('./resuelvefc.json');


app.get('/teamdata', function(req, res){
   res.send(data)
})

const port = 5000;

app.listen(port,() => console.log(`Server startedon port ${port}`));
