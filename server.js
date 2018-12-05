var http = require("http");
var fs = require("fs");
var chalk = require("chalk");
var slug = require("slug");
var moment = require("moment");
var argv = require("yargs").argv;

var satu = slug("NodeJS ♥ is ☢");
var dua = slug("I <3 NodeJS");
var PORT = 3001;

console.log(satu);
console.log(dua);

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(moment([2007, 0, 29]).fromNow(true));

console.log("Usia:", argv.usia);
if (argv.usia >= 25) {
  console.log("Ingat umur, kak!");
} else {
  console.log("Enjoy your life!");
}

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
console.log(chalk.green("Server active, "), "listening on PORT:", PORT);
