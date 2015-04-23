var express = require("express"),
    http = require("http"),
    path = require("path"),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    io = require("socket.io")(http);

//configure port to use
var port = process.env.PORT || 3000;
//connect to db
mongoose.connect('mongodb://localhost/BBCast');
//use express framework
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var server = http.createServer(app).listen(port, function() {
    console.log('Listening on port ' + port);
});
io.listen(server);

require('./app/routes')(app, io, mongoose);
io.sockets.on('connection', function (socket) {
    console.log("a socket connected");

});