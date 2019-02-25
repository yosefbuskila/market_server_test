const con = require('./connectDb');
const randomstring = require("randomstring");
const passwordHash = require('password-hash');

function query(sql, args) {
    return new Promise((resolve, reject) => {
        con.query(sql, args, (err, rows) => {
            if (err)
                return reject(err);
            resolve(rows);
        });
    });
}

module.exports.reg = function (details) {
    return new Promise(function (resolve, reject) {
            details[1] = passwordHash.generate(details[1]);
        // }).then(function () {
            let sql = "INSERT INTO `users` () VALUES (NULL, ?, ?,'user', ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)";
            query(sql, details)
        .then(function (result) {
            console.log("1 record inserted");
            resolve(true);
        })
            .catch(function (err) { console.log('ss'); reject(false); });
    });
}
// module.exports.reg(['aayoasefssd30es53@gmail','1234','yos','bus','null','null','mirski','5','jer','isr','3053']).then(res=>console.log(res)).catch(function (res){console.log(res)} )

module.exports.login = function (email, password) {
    return new Promise((resolve, reject) => {
        let ranstr,idtoken,userDetails;
        query("SELECT * FROM `users` WHERE `email`= ?  ", [email]).then(function (result) {
            if (result.length ==!1) {
                return reject(result);
            }
            if(!passwordHash.verify(password, result[0].password)){
                reject()
            return Promise.reject();
            }
            delete result[0].password;
            userDetails=result[0];
            return result[0].id;
        }) 
        .then((id)=>{
            ranstr=randomstring.generate();
            idtoken=id;
           return query("INSERT INTO `logintoken`(`id`, `token`) VALUES ( ? , ? ) ", [id,ranstr])}).then((result)=>{
               let ansdb={"success": true,"entryDetails":{"token": ranstr ,"id": idtoken}, "userDetails": userDetails}
            resolve(ansdb);            
        }).catch(()=>{})
        
    })
}
//  module.exports.login('aayoasefssd30es53@gmail', '1234').then((token) => console.log('OK',token)).catch(() => console.log('notOK'))


module.exports.chakConnect = function (id, token) {
    return new Promise((resolve, reject) => {
        sqlStr="SELECT logintoken.idtoken, logintoken.token, logintoken.time, users.* " 
        sqlStr+="FROM logintoken INNER JOIN users ON logintoken.id = users.id "
        sqlStr+="WHERE logintoken.id= ? and logintoken.token = ? "
        query(sqlStr, [id,token]).then(function (result) {
            // console.log('a',result,'a')
            if (result.length ==!1) {
                reject()
                return Promise.reject();
            }
                else return result;   
    }).then(result=>{
        // console.log(time,'t')
        resolve(result)
    })
    .catch(()=>{})
})
} 
module.exports.logOut = function (id, token) {
    return new Promise((resolve, reject) => {
        query("DELETE FROM `logintoken` WHERE `id`= ? AND `token`= ?", [id,token]).then(function (result) {
            if(result.affectedRows===1)
            resolve(true)
            else reject(false)
        })
    })
}
module.exports.exist = function (param,value) {
    return new Promise(function (resolve, reject) {
        let sql;
        if(param=='email')
            sql = "SELECT COUNT(id) as count FROM `users` WHERE email=?";
            else if (param=='personal_number')
            sql='SELECT COUNT(id) as count FROM `users` WHERE personal_number=?'
            query(sql, [value])
        .then(function (result) {
            
            resolve(result[0].count);
        })
            .catch(function (err) { reject(-2); }); 
    });
}         
// module.exports.chakConnect(79, 'I2tldNuvwIyYshgXpkmnWJPofv4Snod4').then((res) => console.log('OK'),function (res)  {console.log('notOK')})
// module.exports.logOut(88, '4Ez4IVZuzomlNyzlhX0EKmqAX8vzX99D').then((ansProm) => console.log(ansProm),function (ansProm)  {console.log(ansProm)}) 

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

// var hash2='k';
//       bcrypt.hash('llll', 10).then(function(hash) {
//         console.log(hash);
//         hash2=hash;
//     })

    // setTimeout(function(){ 
    //     bcrypt.compare('someOtherPlaintextPassword', hash2).then(function(res) {
    //         console.log(res);
    //     });
    //  }, 2000);

// 
// const saltRounds = 10;


// const myPlaintextPassword = 'zxcvb';
// const someOtherPlaintextPassword = 'not_bacon';
// var hash2;
// bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
//     // hash2=hash;
//     console.log(hash)
//     // Store hash in your password DB.
// });
// ------------------
// Load hash from your password DB.
// setTimeout(function(){ 
// bcrypt.compare(myPlaintextPassword, hash2).then(function(res) {
//     console.log(res)
//     // res == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash2).then(function(res) {
//     // res == false
//     console.log(res)
// });
// },1000)
 