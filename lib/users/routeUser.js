var express = require('express');
var router = express.Router();
const usersConnect = require('./userManagement')

// Home page route.
router.post('/reg', function (req, res) {
  usersConnect.reg(req.body.regDeatails).then(() => res.json({ "success":true })).catch(function () { res.status(401).json({success:false}); })
})

// About page route.
router.post('/login', function (req, res) {
  usersConnect.login(req.body.email, req.body.password).then((data) => {
    // console.log(data)
    // res.send(JSON.stringify(data));
    res.json(data);
    // res.send(`{ "success": true ,"token":"${data.token}","id":${data.id} }`)

  }).catch(() => res.send(' { "success":false }'))
})

router.post('/logout', function (req, res) {
  usersConnect.logOut(req.body.id, req.body.token).
    then((ansProm) => res.send(ansProm),
      function (ansProm) { res.send(ansProm) })
})
router.get('/exist/:param/:value', function (req, res) {
  usersConnect.exist(req.params.param, req.params.value).then((count) =>{ 
    if (count>0)
    res.json([true])
    else
    res.json([false])
  }).
    catch(function (countRecords) { res.json(['err']) })
})



module.exports = router; 