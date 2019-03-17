const mysql = require('mysql');
const connectSeting=require('/globalVar');

var con = mysql.createConnection(connectSeting);

con.connect(function(err) {
  if (err) throw err;
// console.log('ddd')
});

module.exports=con;
// .query("SELECT * FROM users", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

