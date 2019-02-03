var express = require('express');
var router = express.Router();
const func = require('./funcAdmin')
const con = require('../../lib/db/connectDb');

router.use(function (req, res, next) {
    if (req.client[0].role==='admin')
    next();
    else res.json({ "sucess": false });
  })

function query(sql, args) {
    return new Promise((resolve, reject) => {
        con.query(sql, args, (err, rows) => {
            if (err) {
                return reject(err);
                console.log("err func", err)
            }
            resolve(rows);
        });
    });
}


// Home page route.
function saveFile(req,resultID) {
    return new Promise(function (resolve, reject) {
        let sampleFile = req.files.sampleFile;
        // console.log(req.body)
        // console.log(sampleFile)
        
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv('./public/pic/' + resultID+sampleFile.name, function (err) {
            if (err)
                return reject();
            resolve(resultID);
        });
    });
}

router.post('/add', function (req, res) {
    let sampleFile={};
    sampleFile.name=null;
    if (req.files)
    sampleFile = req.files.sampleFile;
    if (sampleFile.truncated)
            return res.json({ "sucess": false });
    add(req.body.productName, req.body.categery_id, req.body.price, sampleFile.name).then((result) => {
        if(sampleFile.name==null)
        return(result);
        return saveFile(req,result)
    }).then((resultID) => {
        res.json({ "sucess": true, "id": resultID });
    })
        .catch((err) => { console.log('aaa', err); res.json({ "sucess": false }) })
})
add = function (name, categery_id, price, picture) {
    let args = Array.from(arguments);;
    return new Promise(function (resolve, reject) {
        let sql = "INSERT INTO `products` ( `name`, `categery_id`, `price`, `picture`) VALUES ( ? , ?, ?, ?);";
        console.log('arguments', args)
        query(sql, args)
            .then(function (result) {
                if (result.affectedRows == 1) {
                    resolve(result.insertId);
                }
                else { console.log('ddd'); reject() }
            })
            .catch(function (err) { reject(err); });
    });
}
router.post('/update', function (req, res) {
    let sampleFile={};
    sampleFile.name=null;
    if (req.files)
    sampleFile = req.files.sampleFile;
    if (sampleFile.truncated)
            return res.json({ "sucess": false });
    update(req.body.productName, req.body.categery_id, req.body.price, sampleFile.name,req.body.productID).then((result) => {
        if(sampleFile.name==null)
        return(req.body.productID);
        return saveFile(req,req.body.productID)
    }).then((result) => {
        res.json({ "sucess": true });
    })
        .catch((err) => { console.log('aaa', err); res.json({ "sucess": false }) })
})
update = function (name, categery_id, price, picture,productID) {
    return new Promise(function (resolve, reject,) {
        let sql = "UPDATE `products` SET `name` = ?, `categery_id` = ?, `price` = ?";
        if (picture!=null)
        sql+= ", `picture` = "+ con.escape(picture);
        sql+=" WHERE `products`.`id` = ?;";
        console.log('qer', sql)
        query(sql, [name,categery_id,price,productID])
            .then(function (result) {
                if (result.affectedRows == 1) {
                    resolve(result);
                }
                else { console.log('ddd'); reject() } 
            })
            .catch(function (err) { reject(err); });
    });
}
module.exports = router;   