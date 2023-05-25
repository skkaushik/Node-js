const https = require("http");
const data=require('./Data')
https.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();

}).listen(8080)