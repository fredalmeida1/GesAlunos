const express = require('express');
const path = require('path');
const app = express();
/*const connection = require('./public/scripting/dbconnection.js');*/

app.use(express.static('./public'));



app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/login.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/login.html'));
})

app.get('/consultaralunos.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/consultaralunos.html'));
})

app.get('/inseriralunos.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/inseriralunos.html'));
})


const port = 3002;

app.listen(port, () => {
    console.log("Listenning on port ${port}");})