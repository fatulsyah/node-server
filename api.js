var http = require("http");
var PORT = 3000;

var data = {
  nama: "Arif",
  usia: 18
};

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
});

server.listen(PORT);
console.log("Server active, listening on PORT:", PORT);
