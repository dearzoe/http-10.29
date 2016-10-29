var http = require("http");
var fs   = require("fs");
var path = require("path");
var mime = require("mime");
/*var mime={
    ".css":"text/css",
    ".js":"text/javascript",
    ".jpg":"image/jpg",
    ".html":"text/html"
};*/
//创建一个http服务器；
var server = http.createServer(function (req, res) {
    //设置响应类型到响应头中
    //res.setHeader('Content-Type',mime[path.extname(req.url)]+';charset=utf-8');
    res.setHeader('Content-Type',mime.lookup(req.url)+';charset=utf-8');
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
server.listen(8080, function () {
    console.log("监听中")
});
