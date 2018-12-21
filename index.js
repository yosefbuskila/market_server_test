const express = require('express')
const app = express()
const port = 3000
let verified=false;

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    if (verified)
    next()
    else
    res.send('not verified')
  })

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));