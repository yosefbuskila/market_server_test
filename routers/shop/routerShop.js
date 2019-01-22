var express = require('express');
var router = express.Router();
const func = require('./funcshop')

// Home page route.
router.post('/create_cart', function (req, res) {
    func.createCart(req.client[0].id).then((resultID) =>{
        res.json({"sucess": true ,  "id": resultID
    });
}).catch(() => {res.json({"sucess": false})})
    })

router.post('/add_to_cart', function (req, res) {
    func.addToCart(req.client[0].id,req.body.data).then((resultID) =>{
        res.json({"sucess": true ,  "id": resultID    });
}).catch(() => {res.json({"sucess": false})})
    })
router.delete('/delete_item_cart', function (req, res) {
    func.deleteItemCart(req.client[0].id,req.body.data.itemID,req.body.data.cartID).then(() =>{
        res.json({"sucess": true     });
}).catch(() => {res.json({"sucess": false})})
    })
router.post('/update_ship', function (req, res) {
    func.updateShip(req.client[0].id,req.body.data).then(() =>{
        res.json({"sucess": true});
}).catch(() => {res.json({"sucess": false})})
    })
router.post('/last_order', function (req, res) {
    func.lastOrder(req.client[0].id).then((result) =>{
        res.json({"sucess": true, "data":result});
}).catch(() => {res.json({"sucess": false})})
    })
router.post('/items_cart', function (req, res) {
    func.itemsCart(req.client[0].id,req.body.data.cartID).then((result) =>{
        res.json({"sucess": true, "data":result});
}).catch(() => {res.json({"sucess": false})})
    })

module.exports = router;  