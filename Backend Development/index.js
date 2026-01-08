const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    
    const log = `${Date.now()} : ${req} New request recieved \n`;
    fs.appendFile("log.txt", log, (err,data)=>{
        res.end("Hello from the server");
    })
})

server.listen(8000, ()=>console.log("Server Started"));