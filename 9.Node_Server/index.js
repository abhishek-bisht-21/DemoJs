const http = require('http');
const PORT = 3000;

const server = http.createServer(function exec(req,res){
	console.log(req.method)
	if(req.url == '/home'){
		res.end("Welcome to home");
	}
	else if(req.url == '/faq'){
		res.end("List of FAQs");
	}	
	else{
		res.end("Hello World")
	}
}) 

server.listen(PORT, function(){
	console.log("Server is running on ", PORT)
})