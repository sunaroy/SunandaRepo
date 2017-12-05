var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
 res.sendFile('/home/sunanda/SunandaRepo/chat-application/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(socket){
	console.log('user disconnected');
  });
});

http.listen(8000, function(){
 console.log('listening on *:8000');
});

