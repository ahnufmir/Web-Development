const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req,res)=>{
    
    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    const log = `${myUrl}: ${req} : ${req.method} New request recieved \n`;
    fs.appendFile("log.txt", log, (err,data)=>{
        const myUserName = myUrl.query.name;
        res.end("Hi "+ myUserName);
    })
})

server.listen(8000, ()=>console.log("Server Started"));