/*
    사용자가 서버에 접근했을 때, 
    서버 쪽에서 만든 코드가 아니고, 만들어진 HTML 파일 자체를 보여주기
    -> 서버가 매번 코드를 작성하면 양이 한정적이다 -> 가독성 불편

    html 파일을 전송하기 위해서 -> 파일시스템 모듈 (fs)
*/

const http = require("http");
const fs = require("fs").promises;

http.createServer(async (req, res)=>{
    // index.html 파일을 불러와서 사용자에게 보여주기!
    // 오류가 나는 이유
    //   -> 노드js는 기본적으로 비동기, 싱글스레드(직원 한 명) -> 작업이 빨리 끝나는대로 처리
            // -> 처리 시간이 짧고 단발성인 작업에 주로 쓰임 ex)채팅
    //   -> 파일 읽는 건 오래 걸리는 작업 -> 쓰는 작업을 먼저 실행
    //   -> 순서를 임의로 변경 -> async(비동기) await(여기서부터는 끝날때까지 기다리세요)
    //      -> async : 비동기로 처리하겠다! -> 호출해주는 함수 앞에 작성 
    //      -> await : 코드가 종료될 때까지 기다리겠다! -> 기다리는 함수 앞에 작성. async 안에만 작성 가능
    let data = await fs.readFile("./index.html");
    res.write(data);
    res.end();
}).listen(3000);