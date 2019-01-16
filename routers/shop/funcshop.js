const con = require('../../lib/db/connectDb');

function query(sql, args) {
    return new Promise((resolve, reject) => {
        con.query(sql, args, (err, rows) => {
            if (err){
                return reject(err);
                console.log("err func",err)
            }
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
module.exports.addToCart = function (id,data) {
    return new Promise(function (resolve, reject) {

        let sql = "SELECT id FROM carts WHERE id=? AND id_user=?";
            query(sql, [data.cartID,id])
        .then(function (result) {
            if(result.length!==1){
                console.log(result)
                return Promise.reject();
                }
        }).then(()=>{
            // console.log("1")
            let sql="INSERT INTO `item_cart` ( `product_id`, `cart_id`, `user_id`, `units`, `price_sum`) VALUES(?,?,?,?,(SELECT price FROM products WHERE id=?)*?);"
            return query(sql, [data.product_id,data.cartID,id,data.Quantity,data.product_id,data.Quantity])
        }).then((ans)=>{
            // console.log(ans)
            if(ans.affectedRows==1)
            resolve(ans.insertId)
        })
            .catch(function (err) {console.log('errrr',err); reject(); }); 
    });
}   
module.exports.deleteItemCart = function (userID,itemID,cartID) {
    return new Promise(function (resolve, reject) {
        let sql = "DELETE FROM `item_cart` WHERE user_id=? AND id=? ";
        if(cartID)
        sql="DELETE FROM `item_cart` WHERE user_id=? AND cart_id=? ";
            query(sql, [userID,itemID||cartID])
        .then(function (result) {
            if(result.affectedRows>0){
                resolve();
                }
                else{reject()}
        })
            .catch(function (err) { reject(); });
    });
} 