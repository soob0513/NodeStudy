const http = require("http");
const url = require("url");

const qs = require('querystring')

http.createServer(function(req, res){
    let body=""
    req.on("data", function(data){
        body+=data
        console.log(body);
    })
    req.on('end', function(){
        let postData = qs.parse(body);
        console.log(postData);

        res.end();
    })
    let sum = Number(postData.htmlScore)+Number(postData.cssScore)+Number(postData.nodeScore)+Number(postData.androidScore)
    res.write('name : '+postData.name);
    res.write('html : '+postData.htmlScore);
    res.write('css : '+postData.cssScore);
    res.write('nodejs : '+postData.nodeScore);
    res.write('android : '+postData.androidScore);
    res.write('sum : '+sum)
    // if()
}).listen(3006);