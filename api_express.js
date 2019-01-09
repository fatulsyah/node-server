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
    data: {
      nama: "Andi"
    }
  });
});
// ambil data buku spesifik
app.get("/api/book/:id", function(req, res) {
  res.status(200);
  res.send({
    type: "GET",
    data: {
      nama: "Andi"
    }
  });
});

app.post("/api", function(req, res) {
  res.status(200);
  res.send({
    type: "POST",
    data: {
      nama: "Andi"
    }
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
