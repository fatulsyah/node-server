var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysecretpassword",
  database: "toko"
});
db.connect();

app.use(cors());
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.status(200);
  res.send({ status: "OK" });
});

// ambil semua data buku
app.get("/api/karyawan", function(req, res) {
  var sql = "SELECT * FROM karyawan";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200);
    res.send({
      type: "GET",
      data: result
    });
  });
});
// ambil data buku spesifik
app.get("/api/karyawan/:id", function(req, res) {
  res.status(200);
  // query to DB get data book based on req.body.id
  // repo.books.update(id, data);
  // select * from books where book_id=${id}
  var sql = `SELECT * FROM karyawan WHERE id=${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200);
    res.send({
      type: "GET",
      data: result
    });
  });
});

app.post("/api/karyawan", function(req, res) {
  res.status(200);
  // save data to database
  // query to DB based on `req.body`
  // send API response
  var data = req.body;
  var sql = "INSERT INTO karyawan SET ?";
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send({
      type: "POST",
      status: "success",
      message: "Anda berhasil menambahkan data karyawan"
    });
  });
});

app.put("/api/karyawan/:id", function(req, res) {
  res.status(200);
  var id = req.params.id;
  var data = req.body;
  var sql = "UPDATE karyawan SET ? WHERE id=?";
  db.query(sql, [data, id], (err, result) => {
    if (err) throw err;
    res.send({
      type: "PUT",
      status: "success",
      message: "Anda berhasil memperbaharui data karyawan"
    });
  });
});

app.get("*", function(req, res) {
  res.status(404);
  res.send("API Not Found");
});
// GET request
app.listen(3000);
console.log("App listening on PORT 3000");
