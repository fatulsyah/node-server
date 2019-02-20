var express = require("express");
var app = express();
var upload = require("express-fileupload");

app.use(upload());
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/pages/upload.html");
});

app.post("/", function(req, res) {
  if (req.files) {
    console.log(req.files);
    var file = req.files.filename;
    var filename = file.name;
    file.mv("./upload/" + filename, function(err) {
      if (err) {
        console.log(err);
        res.send("<h1>Upload gagal!</h1>");
      } else {
        res.send("<h1>Upload sukses!</h1>");
      }
    });
  }
});

app.listen(3210, function() {
  console.log("Run @port 3210!");
});
