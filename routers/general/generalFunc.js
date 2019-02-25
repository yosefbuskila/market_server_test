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
module.exports.countRec = function (param) {
    return new Promise(function (resolve, reject) {
        let sql;
        if(param=='orders')
            sql = "SELECT COUNT(id) as count FROM `carts` WHERE done";
            else if (param=='items')
            sql='SELECT COUNT(id) as count FROM `products`'
            query(sql, [])
        .then(function (result) {
            
            resolve(result[0].count);
        })
            .catch(function (err) { reject(-2); });
    });
}  