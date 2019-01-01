var express = require('express');
var router = express.Router();
const usersConnect=require('./userManagement')

// Home page route.
router.post('/reg', function (req, res) {
  usersConnect.reg(req.body.regDeatails).then(()=>res.send('OK')).catch(function (){res.send('notOK');} )  
})

// About page route.
router.post('/login', function (req, res) {
  usersConnect.login(req.body.email, req.body.password).then((data) => {
    res.send(` "success": true ,"token":"${data.token}","id":${data.id}`)
    // res.send('ddd')
  }).catch(() => res.send(' "success":false '))
  })

  router.post('/logout', function (req, res) {
    usersConnect.logOut(req.body.id, req.body.token).
    then((ansProm) => res.send(ansProm),
    function (ansProm)  {res.send(ansProm)})
    })

  

module.exports = router;