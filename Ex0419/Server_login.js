// 3005번으로 서버를 만들자
// 사용자가 입력한 ID가 smhrd, PW가 123 --> 로그인 성공!
//                            아니라면 --> 로그인 실패!

const http = require("http")
const url = require("url")

// querystring 모듈 : post 방식으로 보낸 데이터(문자열)을 객체 형식으로 변환
const qs = require('querystring')

/* GET 방식 서버
http.createServer(function(req,res){
    let query = url.parse(req.url, true).query;
    // {id : 'OOO', pw : 'OOO'}
    // console.log(query.id);
    // console.log(query.pw);

    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"})
    query.id=='smhrd'&&query.pw=='123'
    ?res.write("<h1>로그인 성공!</h1>")
    :res.write("<h1>로그인 실패!</h1>")
    res.end();
}).listen(3005);
*/

// POST 방식
http.createServer(function(req,res){
    

    let body = ""
    // 1. 요청 데이터 전송 확인
    req.on("data",function(data){
        // data --> 사용자가 서버로 보낸 데이터
        body+=data
        console.log(body);
        // --> id=smhrd&pw=123 --> 쿼리스트링 형태. 하나의 문자열 형태로 되어있음
    })

    // 2. 데이터 파싱(parsing) : 데이터를 다 받아왔다면 사용하기 편하게끔 변환
    req.on('end', function(){
        let postData = qs.parse(body);         // --> 문자열 형태의 데이터가 객체 형태로 변환
        console.log(postData);

        res.end();
    })

    
}).listen(3005);