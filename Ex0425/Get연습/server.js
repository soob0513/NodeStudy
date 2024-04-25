/*
    서버는 반드시 구조를 이해해야 한다.
    서버의 필수 요수는 1) 서버 생성 2) 포트 지정 
    1. 서버 생성 모듈 -> http
    2. get방식 데이터 변형 -> url
*/
const http = require("http");   // const : 상수 => 변하지 않는 수. 모듈을 불러와야해서 이름이 변하면 안됨
const url = require("url");

http.createServer((req,res)=>{
    // 프론트 페이지에서 넘겨준 num을 활용해서 구구단을 출력
    // console.log(req.url);
    // url 속에 있는 데이터를 접근할 수 있게 객체로 변환!
    let data = url.parse(req.url, true).query
    console.log(data);
    // 테이블 태그 생성
    res.write("<table>")
        for (let i = 1; i< 10;i++){
            res.write(`
                <tr>
                    <td>${data.num}*${i} = ${data.num * i}</td>
                </tr>
            `)
        }
    res.write("</table>")
    res.end()
}).listen(3000);

// get방식에서는 데이터가 url을 통해서 넘어온다.
// url모듈을 활용해서 컴퓨터가 이해할 수 있게 변형
// 응답할 때는 res객체를 활용한다.
// 페이지 자체를 서버가 만드는 행위 -> 서버사이드렌더링 (Server -> 백 페이지/ Client -> 프론트 페이지)