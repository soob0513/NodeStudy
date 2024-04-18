// 3002를 포트번호로 지니는 서버를 생성해주세요!!
// 서버 접속 시 '서버 접속 성공'이라고 출력
const http = require("http"); 

// url : 주소값에 있는 쿼리스트링 문자열을 객체 형식으로 변환해주는 모듈
const url = require("url"); 


http.createServer(function(request, response){
    // request : 요청 정보
    // function(req, res)로 적어줘도 됨. 순서가 중요함

    // [터미널창에 띄우기]
    console.log("서버 접속 성공")
    // [localhost:3002에 띄우기]
    response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"}) // 인코딩
    response.write("<h2>서버 접속 성공!</h2>")


    // [html에서 정보 제대로 받아왔는지 확인]
    // console.log(request)

    // [client가 입력한 정보 받아오기]
    // request.url : 쿼리스트링으로 보낸 데이터를 문자열로 꺼내오겠다!!
    // console.log(request.url)
    // 쿼리스트링으로 보낸 문자열을 객체 형식으로 변환하겠습니다
    // url.parse(request.url, true) --> 쿼리스트링 부분만 사용하겠습니다 
    // console.log(url.parse(request.url, true))

    let query = url.parse(request.url, true).query
    // console.log(query)   => {data : '123'}
    console.log(query.data)

    response.end()
}).listen(3002);