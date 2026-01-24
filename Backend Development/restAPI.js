const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const { builtinModules } = require("module");

const app = express();
const PORT = 8001;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("check kr meri bandmashi im middle ware 1 hahah!!");
  next();
});

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n ${Date.now()} : ${req.method} : ${req.path}`,
    (err, data) => {
      next();
    },
  );
});
// for getting specfic user from any client other than browers
// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => id === user.id);
//   return res.json(user);
// });

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
  .post((req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.send(body);
    });
  })
  .patch((req, res) => {
    const body = req.body;
    console.log(body);
    const modifiedUser = users.find((user) => user.id === Number(req.params.id));
    const allUsersExceptModified = users.filter((user)=> user.id !== Number(req.params.id));
    modifiedUser.id = Number(req.params.id);
    modifiedUser.first_name = body.first_name;
    modifiedUser.last_name = body.last_name;
    modifiedUser.email = body.email;
    modifiedUser.gender = body.gender;
    modifiedUser.ip_address = body.ip_address;
    allUsersExceptModified.splice(Number(req.params.id), 0, modifiedUser );
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(allUsersExceptModified), (err, data) => {
      return res.send(body);
    });
  })
  .delete((req, res) => {
    
    // const toDeleteUser = users.find((user) => user.id === body.id);
    // const index = users.indexOf(toDeleteUser);
    // if(index >= 0)
    //     users.splice(index, 1);
    // else
    //     return res.send("User not Found");
    //console.log("Body: ", req.params.id);
    //console.log("Users: ", users);
    const updatedUsers = users.filter((user)=> user.id !== Number(req.params.id));
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(updatedUsers), (err,data)=>{
        return res.json(updatedUsers);
    })
  });

app.listen(PORT, () => {
  console.log("Hi, its server");
});
