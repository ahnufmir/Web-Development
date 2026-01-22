const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// for getting specfic user from any client other than browers
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => id === user.id);
  return res.json(user);
});

// for listing all users from any client other than browser
app.get("/api/users", (req, res) => {
  return res.json(users);
});

//for lishting all users for browser client
app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app 
    .route("/api/users/:id")
    .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => id === user.id);
    return res.json(user);
    })
    .patch((req,res)=>{
        return res.json({status:"pending"});
    })
    .delete((req,res)=>{
        return res.json({status:"pending"});
    })

app.listen(PORT, () => {
  console.log("Hi, its server");
});
