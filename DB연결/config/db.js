// DB의 연결 정보를 담당 -> 실제 DB를 연결하는 역할
// 모듈 설치 -> mysql2 (npm i mysql2)

const mysql = require("mysql2");

// 연결정보를 담아서 객체 형태로 접근
let conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password :"1234",
    port : 3306,
    database : "nodejs"
});

// 실제 연결정보를 가지고 연결하겠다!
conn.connect();

module.exports = conn;