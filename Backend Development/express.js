const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req,res)=>{
    res.end(`Hello ${req.query.name} , you roll number is ${req.query.rollNo}`);

})

app.listen(port, ()=>{
    console.log("Hello from port " + port);
})
