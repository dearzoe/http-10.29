var http = require("http");
var fs   =require("fs");
//创建一个http服务器；
var server = http.createServer(function (req, res) {
    console.log(req.url);
    if(req.url == "/index.html"){
        fs.readFile("./index.html", function (err,data) {
            res.write(data);
            res.end();
        })
    }else if(req.url == "/index.css"){
        fs.readFile("./index.css", function (err,data) {
            res.write(data);
            res.end();
        })
    }else if(req.url == "/1.jpg"){
        fs.readFile("./1.jpg", function (err,data) {
            res.write(data);
            res.end();
        })
    }
});
//创建一个监听
server.listen(8090, function () {
    console.log("监听中")
});
