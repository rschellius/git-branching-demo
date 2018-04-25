var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('swaag yoloo')
})
 
app.listen(3000)