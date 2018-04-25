var express = require('express')
var app = express()
 
app.use('*', (req, res, next) => {
  next()
})

app.get('/', function (req, res) {
  res.send('Hallo allemaal')
})

app.use('*', (err, req, res, next) => {
  console.log(err)
})

app.listen(3000)