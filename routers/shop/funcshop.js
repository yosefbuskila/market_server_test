const con = require('../../lib/db/connectDb');

function query(sql, args) {
    return new Promise((resolve, reject) => {
        con.query(sql, args, (err, rows) => {
            if (err)
                return reject(err);
            resolve(rows);
        });
    });
}
module.exports.createCart = function (id) {
    return new Promise(function (resolve, reject) {
        let sql = "INSERT INTO `carts` (`id_user`,date_cart) VALUES ( ? , CURRENT_DATE )";
            query(sql, [id])
        .then(function (result) {
            if(result.affectedRows==1){
                resolve(result.insertId);
                }
                else{reject()}
        })
            .catch(function (err) { reject(); });
    });
}  