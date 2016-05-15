var express = require("express");

var app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + "/assets"));
app.get('/', function(request, response){
    
    response.sendFile("./index.html");
    
})

app.get('/app', function(request, response){
    response.sendFile("./app.html");
})

app.listen(3000, function(){
    console.log("Your server has started on port number 3000")
    console.log(__dirname)
})