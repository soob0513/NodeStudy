/*
    프론트에서 get방식으로 보낸 데이터를 처리해주는 서버
*/
const express = require("express");
const app = express();

// post방식에서는 미들웨어에 post데이터를 해석하라고 기능을 더해줘야 한다!
// 필수로 등록해줘야한다! -> qs모듈과 같은 역할
// 꺼내올 때는 req.body -> 데이터가 저장
// app.get() / app.post() -> get방식과 post방식 각각 들어오는 요청을 따로 처리하겠다.

app.use(express.urlencoded({extended :true}));


app.get("/",(req,res)=>{
    // express에서 get방식 데이터를 불러오는 방법
    // req.query -> 넘어온 데이터가 객체화되어서 출력
    let data = req.query;
    console.log(data);
})

app.post("/", (req, res)=>{
    // post 데이터는 body에 담겨서 넘어옴
    // post데이터를 해석하라(위에 적음) => app.use(express.urlencoded({extended :true}));
    let data = req.body;
    console.log("post데이터", data);
})

app.listen(3000);