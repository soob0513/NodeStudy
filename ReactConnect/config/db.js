// mysql2 모듈 설치 -> npm i mysql2
const mysql = require("mysql2");

let conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1234",
    port : 3306,
    database : "nodejs"
});

conn.connect();

module.exports = conn;