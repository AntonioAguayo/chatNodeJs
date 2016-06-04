var express = require("express"), 
http = require("http"),
app = express(),
server = http.createServer(app),
path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set("views",__dirname + "/views");
/*
app.configure(function(){
	app.use(express.static(__dirname));
});
*/


app.get("/", function(req,res){
	res.sendFile(__dirname + '/views/index.html');
});

server.listen(8080);


//objecto para guardar en la sesión del socket a los que se vayan conectando
var usuariosOnline = {};

var io = require("socket.io").listen(server);

