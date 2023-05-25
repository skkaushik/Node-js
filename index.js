const http = require("http");
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify({name:'Sachin Kauhsik',Email:'skkaushik5092@gmail.com'}));
    resp.end();

}).listen(8080)