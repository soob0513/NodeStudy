// 라우터 제작
// 1) 모듈 호출, 2) 모듈 exports, 3) 라우터 제작
// exports한 다음에, 반드시 app require하고, use를 통해서 등록!

const express = require("express");
const router = express.Router();
const path = require("path");
const conn = require("../config/db");

// 1. 기본경로를 설정 -> 루트 경로
router.get("/", (req,res)=>{
    // 사용자가 메인으로 접근하면, main.html 파일을 보여주세요!
    res.sendFile(path.join(__dirname,"..","public","main.html"));
})

// 2. 셀렉트 요청이 들어오면 처리해주는 로직
router.get("/select", (req, res)=>{
    // DB에 접근해서 데이터를 반환 => get방식 (데이터 조회만)
    let sql = "select * from nodejs_member";
    conn.query(sql,(err, rows)=>{
        // rows -> DB에 접근해서 실행한 결과를 담아주는 변수
        res.send(rows);
    });
})

module.exports = router;