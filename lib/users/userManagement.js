const con=require('./connectDb');
const bcrypt = require('bcrypt');
const saltRounds = 9;

module.exports.reg=function(details){
    bcrypt.hash(details[1], saltRounds).then(function(hash) {
        console.log(hash);
        details[1]=hash;
    }).then(function(){
        let sql="INSERT INTO `users` () VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)";
        con.query(sql,details, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              });
    })
}
module.exports.login=function(email,password){

}

// function hashin(textPass){
//     return bcrypt.hash(textPass, saltRounds)
// }


// console.log(con);
// con.query("SELECT * FROM users", function (err, result, fields) {
//         if (err) throw err;
//         // console.log(result);
//       });


//       bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
//         console.log(hash);
//         hash2=hash;
//     })

//     setTimeout(function(){ 
//         bcrypt.compare(someOtherPlaintextPassword, hash2).then(function(res) {
//             console.log(res);
//         });
//      }, 2000);

// module.exports.reg(['yosef3053@gmail','1234','yos','bus','null','null','mirski','5','jer','isr','3053'])