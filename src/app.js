/**
 * Module dependencies.
 */
const http = require('http'),
    path = require('path'),
    express = require('express');

/**
* Author : Pratyus
* Date : 12/01/2019
* Description : 
*/

var app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, '../index.html');

app.use(express.static(DIST_DIR));

app.get('/home', (req, res) => {
    res.sendFile(HTML_FILE)
});

module.exports = app;