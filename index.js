const express = require('express')
const app = express()

const usersConמect=require('./lib/users/userManagement')

const port = 3000;
let verified=false;

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    usersConמect.reg(['yoszeezf@gma','1234','yos','bus','null','null','mirski','5','jer','isr','3053'])
    .then(resp=>next())
    .catch(function (resp){console.log(resp);res.send('not verified');} )
  })

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 