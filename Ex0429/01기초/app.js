/*
    Express 프레임워크
    - 기존 Node로만 개발했던 코드를 훨씬 간결하고, 유지보수 하기 편하게 사용하는 프레임워크
    - Node.js 기술을 그대로 다 사용이 가능
    - '역할은 서버'라는 건 공통
    1) 서버를 생성
    2) 포트 번호를 지정 
*/

// 서버를 생성하기 위해서 express 모듈을 호출
const express = require("express");

// 미들웨어 -> 모든 요청과 응답을 한군데에서 통제하는 역할 -> 메인서버의 역할
const app = express();

// 정적인 파일들을 미들웨어 등록
// 정적인 파일들은 public 폴더에 관리(js, css,html, img, ...)
// app.use(express.static(__dirname));  <-- 같은 폴더에 있을 때 사용
app.use(express.static("public"));  // <-- 파일명 적어주기


// 서버를 생성
app.get("/", (req, res)=>{
    console.log("서버 생성");
    /*
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    res.write("<h1>서버가 만들어졌습니다</h1>");
    res.end();
    */

    // [write vs send]
    // write 
    //   - 콘텐츠헤드 작성 -> 인코딩 / end를 반드시 작성 / 여러 줄을 보낼 수 있다.
    // send
    //   - end, write, head를 하나에 묶어서 사용 / 여러 줄을 보낼 수 없다. -> 템플릿으로 여러 줄 전송
    // res.send(`<h1>보내진 페이지</h1><h1>보내진 페이지</h1>`); 

    // html파일을 전송하는 방법 
    // express는 파일을 불러들일 때 반드시 절대경로를 작성
    // 주의점! 사용자마다 절대경로가 다르기 때문에 알아서 변할 수 있도록 작업
    // __dirname -> 컴퓨터의 현재 작업중인 폴더의 절대경로를 알아오는 키워드
    // res.sendFile("C:/Users/SMHRD/Desktop/NodeStudy/Ex0429/01기초/index.html");
    console.log(__dirname);  // 내 파일의 절대경로 찾기 (C:\Users\SMHRD\Desktop\NodeStudy\Ex0429\01기초)
    res.sendFile(__dirname+"/index.html");

})

// 포트를 지정
// 포트 지정은 반드시 페이지 최하단에 작성
app.listen(3000);