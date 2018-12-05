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

app.get("/", function(req, res) {
  res.status(200);
  res.render("index", { orang: req.params.nama, products });
});
app.get("/about", function(req, res) {
  res.status(200);
  res.render("about");
});
app.get("*", function(req, res) {
  res.status(404);
  res.send("Page Not Found");
});
// GET request
app.listen(3000);
console.log("App listening on PORT 3000");
