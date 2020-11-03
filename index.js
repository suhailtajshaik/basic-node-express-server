const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');

const app = express();

// Middleware
app.use(bodyParser.json());

// Default Route
app.get('/', (req, res, next) => {
    res.statusCode = 200;
    res.send({ message: 'Hello World!' });
    next();
})

// Start server
const server = app.listen(config.port, function () {
    var port = server.address().port;
    console.log('\nExpress server listening on port ' + port + ', in ' + config.env + ' mode');
    console.log("open http://localhost:" + port);
});

// Server on error
server.on('error', function (e) {
    if (e.code === 'EADDRINUSE') {
        console.log('ADDRESS IN USE');
        console.log('\nExpress server listening on port ' + e.port + ', in ' + config.env + ' mode')
    } else {
        process.exit(1);
    }
});