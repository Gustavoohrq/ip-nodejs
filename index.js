const express = require('express')
var app = express()

app.get('/', function(req, res) {
  let ip = req.header('x-forwarded-for') 
  const ipServe = req.connection.remoteAddress
  console.log(ipServe);
  res.send(ipServe)
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});