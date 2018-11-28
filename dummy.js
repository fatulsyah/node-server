require("./book_page");
const assert = require("assert");
var minum = { kopi: ["luwak", "hitam", "susu"] };
assert.equal(minum.kopi.length, 3);

var url = require("url");
var link = "http://lin.id/data.htm?tgl=2&bln=july";
var x = url.parse(link, true);
console.log("Host = " + x.host);
console.log("Path = " + x.pathname);
console.log("Find = " + x.search);

const os = require("os");
var namaCPU = os.hostname();
var osTipe = os.type();
var osPlatform = os.platform();
var osRilis = os.release();
var dirAwal = os.homedir();
var ramSisa = os.freemem();
var ramTotal = os.totalmem();

console.log(namaCPU, osTipe, osPlatform, osRilis, dirAwal, ramSisa, ramTotal);

const fs = require("fs");
fs.appendFileSync("halo.txt", "\n Kuy! ");
fs.writeFileSync("halo.txt", " Halo!");
var x = fs.readFileSync("halo.txt");
console.log(x.toString());
// var y;
// fs.readFile("halo.txt", function(err, data) {
//   y = data;
//   console.log(y);
// });
// new Promise(function(resolve, reject) {
//   resolve("Data 1");
// }).then(function(result) {
//   console.log(result);
// });
// console.log(y);
