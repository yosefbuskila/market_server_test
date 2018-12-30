const con=require('./connectDb');
const bcrypt = require('bcrypt');
var randomstring = require("randomstring");
const saltRounds = 9;

function query( sql, args ) {
    return new Promise( ( resolve, reject ) => {
        con.query( sql, args, ( err, rows ) => {
            if ( err )
                return reject( err );
            resolve( rows );
        } );
    } );
}

module.exports.reg=function(details) {return new Promise (function ( resolve, reject ) {
    bcrypt.hash(details[1], saltRounds).then(function(hash) {
        // console.log(hash);
        details[1]=hash;
    }).then(function(){
        let sql="INSERT INTO `users` () VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)"; 
        return query(sql,details);
    }).then( function ( result) {
                // if (err) throw err;
                // console.log(result)
                console.log("1 record inserted"); 
                resolve ( true);
              })
              .catch(function(err){console.log('ss'); reject( false);});
    });
}

module.exports.login=function(email,password){ return new Promise(  ( resolve, reject ) => {
    query("SELECT `id` FROM `users` WHERE `email`= ? and `password`= ? ",[email,password]).then(function ( result) {
        if(result.length===1) resolve(result); else reject(result);
              });
})
}

module.exports.login('yosef3053@gmail.coms','543').then(()=>console.log('OK')).catch(()=>console.log('notOK'))

// console.log(randomstring.generate()); 

// function hashin(textPass){
//     return bcrypt.hash(textPass, saltRounds)
// }
// SELECT `id` FROM `users` WHERE `email`='yosef3053@gmail' AND `password`='1234'

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

// module.exports.reg(['yoasefssd30es53@gmail','1234','yos','bus','null','null','mirski','5','jer','isr','3053']).then(res=>console.log(res)).catch(function (res){console.log(res)} )