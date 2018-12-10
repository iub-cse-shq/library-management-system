/*
const express =require("express");
const bodyParser=require("body-parser");
const request = require("request");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(_dirname+"/signup.html");
});

app.post("/",function(req,res){
    var firstname=req.body.fname;
    var lastname=req.body.lname;
    var email=req.body.email;
    console.log(firstname,lastname,email);
    
})

app.listen(8080,function(){
    console.log("server running");
});
*/

var http=require('http');
 
 
var fs=require('fs');
function onRequest(request,response){
     
    fs.readFile('index.html',function(err,html){
     if(err)
     throw err;
      
    response.writeHead(200,{'Content-type':'text/html'});
    response.write(html);
    console.log("Server is Running");
    response.end();
});
}
http.createServer(onRequest).listen(8080,process.env.IP);