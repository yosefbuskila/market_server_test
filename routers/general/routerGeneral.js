var express = require('express');
var router = express.Router();
const generalFunc=require('./generalFunc')

// Home page route.
router.get('/num_orders', function (req, res) {
    generalFunc.numOrders().then((countRecords)=>res.json([ countRecords ])).catch(function (countRecords){res.json([ countRecords ]) })  
    })

module.exports = router;  