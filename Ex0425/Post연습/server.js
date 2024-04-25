// post방식으로 데이터를 출력
// 서버생성, 포트 공통
const http = require("http");
// url은 get방식의 데이터를 변형하기 위한 모듈. post에서는 필요없음
// querystring : post방식의 body데이터를 객체 형태로 변형하는 모듈
const qs = require("querystring");

http.createServer((req,res)=>{

    // post방식은 데이터가 body에 담겨서 넘어온다. 
    // 패킷화 -> 조각조각 넘어온다. (보안 때문에)
    //  1. 패킷화된 데이터를 하나의 변수에 합쳐주기!
    //  2. 변수를 객체로 변환

    // 1. 패킷화된 데이터를 하나로 합치는 작업!
    let body = ""   // 가져온 데이터를 담아줄 빈 변수 생성
    req.on("data",(data)=>{
        body += data 
    })

    // 2. 데이터를 객체형태로 변환
    req.on("end", ()=>{
        let data = qs.parse(body);
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
    })

    
}).listen(3000)