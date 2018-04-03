const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.static(__dirname + '/public'));

var ourHost = {};

app.use((req, res, next) => {
    ourHost.host = req.get('Host');
    console.log('host info', req.get('Host'), 'some url', req.url);
    next();
});

app.get('/test', (req, res) => {
    res.send('abeg work oooo');
});

app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname + '/public/index.html'))
});

var server = app.listen(PORT, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App started on http://%s:%s', host, port)
});