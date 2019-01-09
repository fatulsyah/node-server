var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.status(200);
  res.send({ status: "OK" });
});

// ambil semua data buku
app.get("/api/books", function(req, res) {
  res.status(200);
  res.send({
    type: "GET",
    data: [
      {
        title: "Buku 1",
        totalPage: 20
      },
      {
        title: "Buku 2",
        totalPage: 200
      }
    ]
  });
});
// ambil data buku spesifik
app.get("/api/book/:id", function(req, res) {
  res.status(200);
  // query to DB get data book based on req.body.id
  // repo.books.update(id, data);
  res.send({
    type: "GET",
    data: {
      title: "Buku 1",
      totalPage: 20
    }
  });
});

app.post("/api/books", function(req, res) {
  res.status(200);
  // save data to database
  // query to DB based on `req.body`
  // send API response
  res.send({
    type: "POST",
    status: "success",
    message: "Anda berhasil menambahkan data buku"
  });
});

app.put("/api/:id", function(req, res) {
  res.status(200);
  var id = req.params.id;
  res.send({
    type: "PUT",
    data: {
      id: 1,
      nama: "Andi",
      usia: 21
    }
  });
});

app.get("*", function(req, res) {
  res.status(404);
  res.send("API Not Found");
});
// GET request
app.listen(3000);
console.log("App listening on PORT 3000");
