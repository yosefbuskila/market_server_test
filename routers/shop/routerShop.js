var express = require('express');
var router = express.Router();
const func = require('./funcshop')

// Home page route.
router.post('/create_cart', function (req, res) {
    func.createCart(req.client[0].id).then((resultID) =>{
        res.json({"sucess": true ,  "id": resultID
    });
}).catch(() => {res.json(['err'])})
    })


module.exports = router;  