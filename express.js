var express = require("express");
var app = express();

app.set("view engine", "ejs"); // views folder default
app.set("views", __dirname + "/pages"); // custom folder

// get data from data source
var products = [
  "Product A",
  "Product B",
  "Product C",
  "Product D",
  "Product E"
];
var products = {
  pages: {
    1: ["Product A", "Product B", "Product C", "Product D", "Product E"],
    2: ["Product F", "Product G", "Product H", "Product I", "Product J"]
  }
};

app.use("/assets", express.static("assets"));

app.get("/", function(req, res) {
  console.log(req.query);
  res.status(200);
  res.render("index", { orang: req.params.nama, products });
});
app.get("/about", function(req, res) {
  console.log(req.query);
  var currentPage = req.query.page;
  var createdAt = req.query.created_at;
  res.status(200);
  res.render("about", { page: currentPage, created: createdAt, products });
});
app.get("*", function(req, res) {
  console.log(req.query);
  res.status(404);
  res.send("Page Not Found");
});
// GET request
app.listen(3000);
console.log("App listening on PORT 3000");
