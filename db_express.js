const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

app.use(bodyParser.json());

db.defaults({ data: [] }).write();
// db.get("data")
//   .push({ nama: "Andi", usia: 24 }, { nama: "Ana", usia: 23 })
//   .write();

const jumlah = db
  .get("data")
  .size()
  .value();
console.log("Total:", jumlah);

const users = db.get("data").value();
console.log("Users:", users);

const firstData = db
  .get("data")
  .take(1)
  .value();
console.log("First Data:", firstData);

const getUser = db.get("data[2]").value();
console.log("Specific User:", getUser);

// db.get("data")
//   .remove({ nama: "Budi" })
//   .write();

app.get("/", (req, res) => {
  db.get("data")
    .push({ nama: "Daris", usia: 23, skin: "brown" })
    .write();
  res.send("Halo Dunia!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  db.get("data")
    .push({
      nama: req.body.nama,
      usia: req.body.usia
    })
    .write();
  res.send({
    status: "POST berhasil",
    nama: req.body.nama,
    usia: req.body.usia
  });
});

app.listen(3000, () => {
  console.log("Server @port 3000!");
});
