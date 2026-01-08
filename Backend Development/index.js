const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("New request recorded");
    res.end("Hello from the server");
})

server.listen(8001, ()=>console.log("Server Started"));