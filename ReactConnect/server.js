/*  기존 Node 수업 때는 app.js 라는 파일을 사용했지만, 
    React에서도 App.js 라는 파일을 사용하기 때문에 수업에 혼선을 줄 수 있어서 
    server.js라는 이름으로 진행. 하는 일은 동일함  */

const express = require("express");
const app = express();
const router = require('./routes/router');
const path = require('path');
const cors = require('cors');

// CORS 오류를 방지하기 위한 모듈 -> cors를 설치
app.use(cors());

// 넘어온 데이터를 사용하겠다 (POST방식에서만)
app.use(express.urlencoded({extended : true}));

// 넘어온 데이터를 JSON 형태로 변환하겠다
app.use(express.json()); 

/** project TIP!
 * 1) CORS 오류 -> cors 설정 안한거
 * 2) 데이터는 넘어오는데 undefined? => url encoded 설정
 * 3) undefined 은 아닌데 텅 빈채로? => json 처리
 * 4) 정말로 다~ 썼는데 안된다? 순서 문제 (express가 router 위에 있어야 함)
 */

// 정적인 파일(ex.html) 사용할 때 적어줘야 함
app.use(express.static(path.join(__dirname, "react-project", "build")));

// 서버가 많으면 헷갈리기 때문에 설정 (원래 컴 설정에 맞게. 없다면 3000으로)
app.set('port', process.env.PORT || 3000);

app.use(router);


// app.listen(app.get('port'));
// 현재 사용중인 port 번호 확인하기
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), 'waiting...')
});