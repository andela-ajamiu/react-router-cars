const express = require('express');
const path = require('path');

// const env = process.env.NODE_ENV = 'development';

const PORT = process.env.PORT || 3001;
const app = express();

// process.env.NODE_ENV

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    var ourHost = req.get('Host');
    console.log('host info', req.get('Host'), 'some url', req.url);
    next();
});

console.log('dem histtttt', ourHost);

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

// var server = app.listen(PORT, function () {
//     var port = server.address().port;
//     require('dns').lookup(require('os').hostname(), function (err, add, fam) {
//         console.log('Example app listening at http://%s:%s', add, port);
//     })
// });