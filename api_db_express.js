const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "lintang",
  password: "mysecretpasswords",
  database: "toko"
});
db.connect();

var sql = "SELECT * FROM karyawan";
db.query(sql, (err, result) => {
  if (err) throw err;
  console.log(result);
});
db.end();
