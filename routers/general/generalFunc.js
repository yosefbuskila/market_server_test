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
module.exports.numOrders = function () {
    return new Promise(function (resolve, reject) {
            let sql = "SELECT COUNT(id) as countOrders FROM `carts` WHERE done";
            query(sql, [])
        .then(function (result) {
            console.log(result)
            resolve(result[0].countOrders);
        })
            .catch(function (err) { reject(-2); });
    });
} 