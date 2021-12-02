const express = require("express");
const app= express();


app.get("/", function(req,res){
res.send("pagina inicial")

})

app.get("/sobre", function(req,res){
res.sendFile(__dirname + "/index.html")

})

app.get("/iala/:num", function(req,res){
var oi=  req.params.num
res.send(oi)

})



app.listen(8081, function(){
console.log("tá rodando po")

});
