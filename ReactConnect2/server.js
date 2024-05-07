/* 기존 Node 수업 때는 app.js 라는 파일을 사용했지만, React에서도 App.js 라는 파일을 사용하기 때문에 수업에 혼선을 줄 수 있어서 server.js 라는 이름으로 진행  */

const express = require('express'); 
const app = express(); 
const router = require('./routes/router');
const path = require('path')
const cors = require('cors')

// CORS 오류를 방지하기 위한 모듈 -> cors를 설치 
app.use(cors())

// 넘어온 데이터 사용 (post방식)
app.use(express.urlencoded({extended : true}))

// 넘어온 데이터를 json 형태로 사용
app.use(express.json())

/** project TIP! 
 * 1) CORS 오류 -> cors 설정 안한거 
 * 2) 데이터는 넘어오는데 undefined? => url encoded 설정 
 * 3) undefined은 아닌데 텅 빈채로? => json 처리 
 * 4) 정말로 다~ 썼는데 안된다? 순서 문제 
 */

app.use(express.static(path.join(__dirname,"react-project","build")))
app.set('port', process.env.PORT || 3000);

app.use(router)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), 'waiting...')
}); 