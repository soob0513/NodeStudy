const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    // main.html 파일을 호출
    res.sendFile(__dirname+"/public/main.html");
})

app.get("/baseball", (req, res)=> {
    // baseball.html 파일 호출
    res.sendFile(__dirname+"/public/baseball.html");
})
app.get("/soccer", (req, res)=> {
    // soccer.html 파일 호출
    res.sendFile(__dirname+"/public/soccer.html");
})

app.listen(3000);