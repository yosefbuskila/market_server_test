const mysql = require('mysql');
console.log(__dirname)
const connectSeting=require('../globalVar');

var con = mysql.createConnection(connectSeting);

con.connect(function(err) {
  if (err) throw err;
// console.log('ddd')
});

module.exports=con;

