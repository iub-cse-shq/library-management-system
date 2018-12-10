const express = require("express");
const app=express();

app.get("/",function(request,response){
    response.send("hello");
});

app.listen(8080,function(){
    console.log("server started");
});