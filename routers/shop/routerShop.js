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

module.exports = router;  