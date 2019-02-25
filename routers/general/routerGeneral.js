var express = require('express');
var router = express.Router();
const generalFunc=require('./generalFunc')

// Home page route.
router.get('/sum/:param', function (req, res) {
    generalFunc.countRec(req.params.param).then((countRecords)=>res.json([ countRecords ])).catch(function (countRecords){res.json([ countRecords ]) })  
    })
router.get('/cities', function (req, res) {
    res.json([ 
        'Jerusalem', 'Tiberias', 'Dimona', 'Afula', 'Beit Shemesh', 'Bnei Brak', 'Ashkelon', 'Hatzor', 'Arad', 'London'
     ])
    })
module.exports = router;  