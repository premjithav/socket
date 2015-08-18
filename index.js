var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
var count=0;
setInterval(function(){
  console.log('test');
  count++;
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', "test : "+count);
  });
});
}, 1 * 1 * 1000);   

http.listen(3000, function(){
  console.log('listening on *:3000');
});
