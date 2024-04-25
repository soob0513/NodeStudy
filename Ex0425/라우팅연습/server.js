const http = require("http");
const fs = require("fs").promises;

http.createServer(async (req,res)=>{
    // 작업
    // 만약에 요청에서 들어온 경로가 -> soccer라면 -> soccer.html 리턴
    // 만약에 요청에서 들어온 경로가 -> baseball이라면 -> baseball.html 리턴
    console.log(req.url);  // -> '/soccer' 형태로 출력됨

    // 실습
    // req.url 값이 /soccer랑 같다면 soccer.html 리턴
    // req.url 값이 /baseball이랑 같다면 baseball.html 리턴
    /*
    let soccerPage = await fs.readFile("./soccer.html")
    let baseballPage = await fs.readFile("./baseball.html")

    if (req.url == '/soccer'){
        res.write(soccerPage)
    }else if (req.url == "/baseball"){
        res.write(baseballPage)
    }
     res.end();
    */

    /* 선생님
    if (req.url == "/soccer"){
        let data = await fs.readFile("soccer.html");
        res.write(data);
        res.end();
    }else if ( req.url == "/baseball"){
        let data = await fs.readFile("baseball.html");
        res.write(data);
        res.end();
    }
    */
    // 선생님2 --> 유지보수 강화
    let data =""
    if (req.url == "/soccer"){
        data = await fs.readFile("soccer.html");
    }else if ( req.url == "/baseball"){
        data = await fs.readFile("baseball.html");
    }
    res.write(data);
    res.end();

}).listen(3000);