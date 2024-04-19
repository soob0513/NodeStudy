console.log("첫 노드 실행");

// node 기반으로 Backend 서버 만들기

// require : 모듈을 가져오는 기능
// http 모듈 : 클라이언트에서 요청을 받고 응답해주는(요청을 처리한다) 서버의 기본 모듈 
const http = require("http");

// http.createServer : 서버 생성 (클라이언트에서 접근할 수 있게끔 서버를 만들어준다)
http.createServer(function(request, response){
    // request : 요청 (클라이언트 -> 서버) 정보
    // response : 응답 (서버 -> 클라이언트) 정보 

    // 요청 정보 확인 
    let ip = request.connection.remoteAddress
    console.log(ip);

    
    if (ip === `::ffff:192.168.219.50`){
        console.log('선생님 환영합니다')
    }else if (ip === `::ffff:192.168.219.45`){
        console.log("준님 환영합니다!")
    }else if (ip === `::ffff:192.168.219.69`){
        console.log("영빈님 환영합니다")
    }else if (ip === "::ffff:192.168.219.54") { 
        console.log("수빈님 환영합니다")
    }else {
        console.log("손님 환영합니다")
    }     // -> ip 적을 때 백틱으로 적거나 ""로 적어야 하는 듯. ''적으니까 조건문 안 됨

    // call back 함수 : 특정 함수 안에서 호출되어 실행되어지는 함수

    console.log("서버 실행중 입니다") ; 
    // --> 크롬창은 Client 영역이고 VSCode는 Server의 영역이라서 response를 해주지 않으면 크롬창 console 창에 뜨지 않는다
    
    // 200 --> 정상 응답
    response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"}) // 인코딩 (응답 후)
    response.write("<h1>응답 성공</h1>")

    response.end(); // 여기까지 응답을 마무리하겠다!! 안 해주면 계속 돌아감(클라이언트의 자원을 계속 소모)
}).listen(3001);   
// .listen(3001) => createServer로 만들어진 사용자 임의서버를 3001공간에 실행시키겠다!
//               => .listen(포트번호) 없으면 서버가 돌아가지 않는다

// URL : 해당하는 주소로 컴퓨터 서버에 접근하겠습니다 (요청을 보내겠습니다)
// http://localhost:3001 
// = http://127.0.0.1:3001
// = http://192.168.219.54:3001   --> 명령 프롬프트(cnd) -> ipconfig + Enter 치면 나옴