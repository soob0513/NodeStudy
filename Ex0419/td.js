const http = require("http");
const url = require("url");

http.createServer(function(req, res){
    let query = url.parse(req.url, true).query
    // console.log(query)
    // console.log(query.data)

    /* 수빈
    const arr = [];
    for (let i = 1; i <= Number(query.data);i++){
        arr.push(i)
    }
    // console.log(arr);
    
    const List = arr.map((num, idx)=> <td>{num}</td>)
    res.write('<table><tr>'+{List}+'</tr></table>') 
    //  border='1' bordercolor="black" align="center"
    */

    // 선생님
    res.write("<table border='1' bordercolor='black'>")
    res.write("<tr>")
    for (let i=0;i<query.data; i++){
        res.write("<td>"+(i+1)+"</td>")
    }
    res.write("</tr>")
    res.write("</table>")

    res.end();
}).listen(3004);