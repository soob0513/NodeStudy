/*
    Express와 DB 연결 -> mysql
    [프로세스]
    1) 프론트 페이지 제작 (조회, 삽입, 삭제) -> 프로젝트 때는 리액트
    2) app.js 서버 생성, 포트 지정
    3) 라우터 제작
    4) 라우터에서 DB를 접근하기 위해서 DB접근파일 제작 -> DB 연결 정보를 저장하는 파일
    5) 프론트페이지에서 데이터를 요청 (조회, 삽입, 삭제)
    6) 라우터가 DB 연결 후, 데이터를 처리
 */
const express = require("express");
const app = express();
const router = require("./routes/router");

app.use(router);
app.listen(3000);