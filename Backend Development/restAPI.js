const express = require("express");
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const fs = require("fs");
const { builtinModules } = require("module");

const app = express();
const PORT = 8001;

app.use(express.urlencoded({ extended: false }));

const schema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    require: true,
  },
  ip_address: {
    type: String,
    unique: true,
  },
});

mongoose
  .connect("mongodb://localhost:27017/My-Practise-DB")
  .then(console.log("Moongose Connected"))
  .catch((err) => console.log("Mongo Error", err));
  
const User = new mongoose.model("tests", schema);

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
  .route("/api/users/:email")
  .get(async (req, res) => {
    const email = req.params.email;
    console.log(email);
    // const user = users.find((user) => id === user.id);
    // return res.json(user);
    const result = await User.findOne({email : email});
    console.log("Result ", result);
    return res.json(result);
  })
  .post(async(req, res) => {
    const body = req.body;
    if(!body.first_name || !body.email || !body.gender || !body.ip_address)
        return res.status(400).json({msg : "All fields are required"})
    const result = await User.create({
        first_name : body.first_name,
        last_name : body.last_name,
        gender : body.gender,
        email : body.email,
        ip_address : body.ip_address
    })
    console.log("Result " , result);
    return res.status(201).json({msg : "Entity Createad"});
    // users.push({ ...body, id: users.length + 1 });
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //   return res.send(body);
    // });
  })
  .patch(async (req, res) => {
    const body = req.body;
    console.log(body);
    const email = req.params.email;
    
    const result = await User.findOne({email: email}).replaceOne({
        first_name : body.first_name,
        last_name : body.last_name,
        gender : body.gender,
        email : body.email,
        ip_address : body.ip_address
    })

    return res.status(200).json({msg: "Document Updated"});

    // const modifiedUser = users.find(
    //   (user) => user.id === Number(req.params.id),
    // );
    // const allUsersExceptModified = users.filter(
    //   (user) => user.id !== Number(req.params.id),
    // );
    // modifiedUser.id = Number(req.params.id);
    // modifiedUser.first_name = body.first_name;
    // modifiedUser.last_name = body.last_name;
    // modifiedUser.email = body.email;
    // modifiedUser.gender = body.gender;
    // modifiedUser.ip_address = body.ip_address;
    // allUsersExceptModified.splice(Number(req.params.id), 0, modifiedUser);
    // fs.writeFile(
    //   "./MOCK_DATA.json",
    //   JSON.stringify(allUsersExceptModified),
    //   (err, data) => {
    //     return res.send(body);
    //   },
    // );
  })
  .delete(async (req, res) => {
    // const toDeleteUser = users.find((user) => user.id === body.id);
    // const index = users.indexOf(toDeleteUser);
    // if(index >= 0)
    //     users.splice(index, 1);
    // else
    //     return res.send("User not Found");
    //console.log("Body: ", req.params.id);
    //console.log("Users: ", users);
    // const updatedUsers = users.filter(
    //   (user) => user.id !== Number(req.params.id),
    // );
    // fs.writeFile(
    //   "./MOCK_DATA.json",
    //   JSON.stringify(updatedUsers),
    //   (err, data) => {
    //     return res.json(updatedUsers);
    //   },
    // );
    await User.findOneAndDelete({email : req.params.email});
    return res.status(204).json({msg: "deleted"});
  });

app.listen(PORT, () => {
  console.log("Connected on port ", PORT);
});
