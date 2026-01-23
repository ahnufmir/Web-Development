const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

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
    users.push(body);
    const modifiedUser = users.find((user) => user.id === body.id);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.send(body);
    });
  })
  .delete((req, res) => {
    return res.json({ status: "pending" });
  });

app.listen(PORT, () => {
  console.log("Hi, its server");
});
