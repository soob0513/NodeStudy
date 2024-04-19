const http = require("http");
// 쿼리스트링 데이터 사용가능 모듈 : url
const url = require("url");

http.createServer(function(req, res){
    // console.log(req.url)

    // 문자열로 된 쿼리스트링을 객체 형식으로 변환
    let query = url.parse(req.url, true).query;

    /* 
    let num1 = Number(query.data);
    let num2 = parseInt(query.data2);
    let plus = num1 + num2;
    console.log(num1);
    console.log(num2);
    */

    // res.write(Number(query.data)+'+'+Number(query.data2)+'='+(Number(query.data)+Number(query.data2)))
    // res.write('<h1>'num1''num2'='plus'</h1>');
    // res.write('<h1>'+Number(query.data)+'+'+Number(query.data2)+'='+(Number(query.data)+Number(query.data2)+'</h1>'))
    res.write(`<h1>${Number(query.data)}+${Number(query.data2)}=${(Number(query.data)+Number(query.data2))}</h1>`)
    res.end();
}).listen(3003);

// http://localhost:3003 