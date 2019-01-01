var express = require('express');
var router = express.Router();
const usersConnect=require('./userManagement')

// Home page route.
router.post('/reg', function (req, res) {
  usersConnect.reg(req.body.regDeatails).then(()=>res.send('OK')).catch(function (){res.send('notOK');} )  
})

// About page route.
router.post('/login', function (req, res) {
  usersConnect.login(req.body.email, req.body.password).then((token) => {
    res.send(` "success": true ,"token":" ${token} " `)
    // res.send('ddd')
  }).catch(() => res.send(' "success":false '))
  
})

module.exports = router;