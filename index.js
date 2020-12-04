const express = require('express')
var app = express()
var port = process.env.YOUR_PORT || process.env.PORT || 3000;

app.get('/', function(req, res) {
  let ip = req.header('x-forwarded-for') 
  const ipServe = req.connection.remoteAddress
  console.log(ipServe);
  res.send(ipServe)
});

app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta ${port}!`);
});