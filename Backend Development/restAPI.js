const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.get("/api/users/:id", (req,res)=>{
    const id = req.params.id;
    const user = users.find( (user) => id === user.id);
    return res.json(user);
})

app.get("/api/users", (req, res) => {
    return res.json(users);
});



app.listen(PORT, () => {
  console.log("Hi, its server");
});
