console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");


// MongoDB connect/ chaqirish
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session code

//3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="background:blueviolet">HELLO WORLD by LUCAS</h1>`);
// });
// app.get("/gift", function (req, res) {
//   res.end(`<h1 style="background:blueviolet">Siz sovg'alar sahifasidasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  // res.json({ test: "succes" });
  // res.end("success");
  const new_reja = req.body.reja;
  db.collection('plans').insertOne({reja: new_reja}, (err, data) => {
    if(err) {
      console.log(err);
      res.end('something went wrong');
    } else {
      res.end("successfully added");
    }
  });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log('user entered /')
  db.collection("plans")
  .find()
  .toArray((err, data) => {
    if(err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      console.log(data);
      res.render("reja", {items: data});
    }
  })
  res.render("reja");
});


module.exports = app;

