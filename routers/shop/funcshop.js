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
        let sql = "INSERT INTO `carts` (`id_user`,date_cart,price) VALUES ( ? , CURRENT_DATE,0 )";
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
module.exports.updateShip = function (userID,data) {
    return new Promise(function (resolve, reject) {
        let sql = "UPDATE `carts` SET `price`=(SELECT SUM(price_sum) FROM item_cart WHERE cart_id=?),";
        sql+="`city_ship`=?,`street_ship`=?,`date_ship`=?,`date_order`=CURRENT_DATE,`credit_num`=?,`done`=1 WHERE id=? AND id_user=?"
            query(sql, [data.cartID,data.city,data.street,data.date,data.creditNam,data.cartID,userID])
        .then(function (result) {
            if(result.affectedRows===1){
                resolve();
                }
                else{reject()}
        })
            .catch(function (err) { reject(); });
    });
} 
module.exports.lastOrder = function (userID) {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT * FROM `carts` WHERE id=(SELECT max(id) FROM carts WHERE id_user=?)";
            query(sql, [userID])
        .then(function (result) {
            if(result.length===0){
                resolve([]);
                }
                else if(result[0].done===0){
                    query("SELECT sum(price_sum) as priceProd FROM item_cart WHERE cart_id=?",[result[0].id])
                    .then((result2)=>{
                        result[0].price=result2[0].priceProd|0;
                        resolve(result);
                    })
                }
                else resolve(result);
        })
            .catch(function (err) { reject(); });
    });
} 
module.exports.itemsCart = function (userID,cartId) {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT * FROM `item_cart` INNER JOIN `products` on `products`.`id`=`item_cart`.`product_id` WHERE `item_cart`.`user_id`=? and `item_cart`.`cart_id`=?";
            query(sql, [userID,cartId])
        .then(function (result) {
            resolve(result)
        })
            .catch(function (err) { reject(); });
    });
} 
module.exports.products = function (filter,value) {
    return new Promise(function (resolve, reject) {
        console.log('filter',filter, value)
        let sql = "SELECT * FROM `products` WHERE ";
        if(filter==='category')
        sql+= " categery_id= ? ";
        else if(filter==="name"){
        sql+=' name LIKE ? '
        value='%'+value+'%';
        }
        query(sql, [value])
        .then(function (result) {
            resolve(result)
        })
            .catch(function (err) { reject(err); });
    });
}  
module.exports.categories = function () {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT * FROM `categories`";
            query(sql, [])
        .then(function (result) {
            resolve(result)
        })
            .catch(function (err) { reject(er); });
    });
}
module.exports.busyDay = function () {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT date_ship FROM `carts` WHERE date_ship is NOT null GROUP BY date_ship HAVING COUNT(id) >3";
            query(sql, [])
        .then(function (result) {
            resolve(result)
        })
            .catch(function (err) { reject(er); });
    });
}