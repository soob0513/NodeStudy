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
        // err -> 통신에 실패했을 때 (서버의 문제, 쿼리문 문법 오류)
        // rows -> DB에 접근해서 실행한 결과(가져온 데이터)를 담아주는 변수
        //      -> 실행 결과를 배열로 받아옴 
        // res.send(rows);

        // if문으로 써도 됨
        if (rows.length>0){
            // 통신 연결 성공
            res.send(rows);
        }
        else{
            // console.log("TGest")
            // 데이터가 담겨져있지 않을 때 (통신 실패가 아님. 통신은 성공함)
            // 통신에 성공했지만 데이터를 아무것도 못 가져왔을 때
            res.send({data :"회원이 존재하지 않습니다."});
        }
    });
})

// 3. insert router 생성
/* get 방식
router.get("/insert", (req,res)=>{
    //  1. 데이터 삽입
    // let sql = "insert into nodejs_member values ('smhrd', '123', 'Minsu')"

    // 2. 회원가입
    // http://localhost:3000/insert?id=id&pw=pw&nick=nick
    console.log(req.query)
    // let sql = `insert into nodejs_member values ('${req.query.id}','${req.query.pw}',' ${req.query.nick}')`
    let sql = `insert into nodejs_member values (?,?,?)`

    conn.query(sql, [req.query.id, req.query.pw, req.query.nick], (err,rows)=>{
        // rows -> 쿼리문 실행 정보
        // affectedRows -> 영향을 받은 행의 개수

        console.log("insert 성공", rows); 
        // res.send(rows);
        if (rows.affectedRows>0){
            // 클라이언트한테 삽입 성공! 응답 
            res.send({data:"성공!"})
        }
        else {
            // 클라이언트한테 삽입 실패! 응답
            res.send({data:"실패!"})
        }

    })
})
*/

// POST 방식
router.post("/insert", (req,res)=>{
    // post 방식은 body 영역에 데이터가 담긴다!
    console.log(req.body);
    let sql = `insert into nodejs_member values (?,?,?)`

    conn.query(sql, [req.body.id, req.body.pw, req.body.nick], (err,rows)=>{
        // rows -> 쿼리문 실행 정보
        // affectedRows -> 영향을 받은 행의 개수

        console.log("insert 성공", rows); 
        // res.send(rows);
        if (rows.affectedRows>0){
            // 클라이언트한테 삽입 성공! 응답 
            res.send({data:"성공!"})
        }
        else {
            // 클라이언트한테 삽입 실패! 응답
            res.send({data:"실패!"})
        }

    })
})

// 4. delete
router.get("/delete", (req, res)=>{
    /*
    let sql = "delete from nodejs_member where id = 'smhrd'";
    conn.query(sql, (err, rows)=>{
        console.log("delete 완료", rows);  // -> 터미널에 출력됨
        // res.send(rows);
        if (rows.affectedRows>0){
            // 삭제 성공
            res.send({data:1})  // -> 크롬 F12에 출력됨          
        }
        else {
            // 삭제 실패
            res.send({data:0})
        }
    })
    */
    
    // 2. 입력한 ID에 해당하는 회원삭제
    console.log(req.query);
    // req.query => {id : deleteID}
    let sql = `delete from nodejs_member where id =?`

    conn.query(sql, [req.query.id], (err, rows)=>{
        if (rows.affectedRows>0){
            res.send({data:1})        
        }
        else {
            res.send({data:0})
        }
    })
})

module.exports = router;