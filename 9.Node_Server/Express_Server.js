const express = require('express');


const app = express();

const PORT = 3000;

app.get('/', function(req,res){
	res.send("Hello World");
})


app.get('/home', function(req,res){
	res.send("Welcome to Home");
})

app.patch('/', function(req,res){
	res.send("This is Patch req");
})

app.post('/home', function(req,res){
	res.send("Hello World");
})

app.listen(PORT, function process(){
	console.log("Server Started")
})
