var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}))

mongoose.Promise = Promise;

var SearchVal = mongoose.model('SearchVal', {
    search: String
});


io.on('connection', (socket) =>
{
    console.log('A new user connected');
});

app.post('/', async (req,res) =>{
    // var searched = req.body();
    // console.log(`Received data - ${searched}`);
    try {
        var searchVal = new SearchVal(req.body);

        //var searched = await searchVal.save();
        console.log('Message saved');
        
        console.log(searchVal);
    }
    catch (error){
        res.sendStatus(500)
        return console.error(error)
    }
});

// Enable listening for requests on port 3000
var server = http.listen(3000, () => 
{
    console.log('Server is listening on port ', server.address().port)
});