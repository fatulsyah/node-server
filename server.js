var http = require("http");
var fs = require("fs");
var PORT = 3001;

var server = http.createServer(function(req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/pages/index.html").pipe(res);
  } else if (req.url === "/profil") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/pages/profile.html").pipe(res);
  } else if (req.url === "/berita") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/pages/news.html").pipe(res);
  } else if (req.url === "/galeri") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/pages/gallery.html").pipe(res);
  } else if (req.url === "/tentang") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/pages/about.html").pipe(res);
  } else if (req.url === "/kontak") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/pages/contact.html").pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/pages/404.html").pipe(res);
  }
});

server.listen(PORT);
console.log("Server active, listening on PORT:", PORT);
