var http = require("http");
var fs   =require("fs");
//创建一个http服务器；
var server = http.createServer(function (req, res) {
    //设置响应类型到响应头中
    res.setHeader('Content-Type','text/html;charset=utf-8');
    if(req.url == "/clock"){
        res.end(new Date().toLocaleString());
    }else{
        fs.readFile("."+req.url, function (err,data) {
            res.write(data);
            res.end();
        })
    }
});
//创建一个监听
server.listen(8899, function () {
    console.log("监听中")
});
