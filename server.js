var express = require('express')
var app = express()
 
app.use('*', (req, res, next) => {
  next()
})

app.get('/', function (req, res) {
  res.send('Hallo allemaal')
})

app.get('/api/helloworld', function (req, res) {
  res.status(200).json({
    message: 'Hello World'
  }).end()
})

app.use('*', (err, req, res, next) => {
  console.log(err)
})

app.listen(3000)
