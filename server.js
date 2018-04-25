var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hallo allemaal')
})

app.get('/api/helloworld', function (req, res) {
  res.status(200).json({
    message: 'Hello World'
  }).end()
})

app.listen(3000)