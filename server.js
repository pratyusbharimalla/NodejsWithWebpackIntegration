/*
* Module description
*/

const express = require('express'),
      os = require('os'),
      http = require('http'),

      constant = require('./src/constant'),
      app = require('./src/app');

/**
* Author : Pratyus
* Date : 12/01/2013
* Description : To send email
*/

const port = normalizePort(process.env.PORT || constant.PORT);
app.set(constant.CONST_STR_PORT, port);

var server = http.createServer(app);
server.listen(port);

console.log('Server started on port ' + port);

/**
  * Normalize the port to get the application port.
  */
 function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };


  app.get('/api/v1/greetings', (req, res) => {
    res.send({
        greet: 'Hello ',
        message: 'Node js with Webpack integration success.'
    })
  });
