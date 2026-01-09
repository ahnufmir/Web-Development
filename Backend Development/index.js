const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const myUrl = url.parse(req.url, true);
  //   console.log(myUrl);
  // const log = `${myUrl}: ${req} : ${req.method} New request recieved \n`;
  // fs.appendFile("log.txt", log, (err,data)=>{
  //     if(myUrl.pathname = "/signup"){
  //         if(myUrl.method == "GET")
  //             res.end("This is signup form");
  //         else if(myUrl.method == "POST")
  //             res.end("Successful in database");
  //     }
  //     else if(myUrl.pathname == "/user"){
  //         const myUserName = myUrl.query.name;
  //         res.end("Hi "+ myUserName);
  //     }
  //     else
  //         res.end("404 Not Found");
  // })
  if (myUrl.pathname === "/signup") {
    if (req.method === "GET") {
      res.end("This is signup form");
      return;
    } else if (myUrl.method === "POST") {
      res.end("Successful in database");
      return;
    }
}
   else {
    res.statusCode = 404;
    res.end("Method not alowed");
  }
});

server.listen(8000, () => console.log("Server Started"));
