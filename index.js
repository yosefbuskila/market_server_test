const express = require('express')
const bodyParser = require('body-parser')

const usersConnect=require('./lib/users/userManagement')
const userRouter = require('./lib/users/routeUser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', userRouter);
 
const port = 3000;

app.use(function (req, res, next) {
    console.log('Time:', Date.now(),req.body)
    usersConnect.chakConnect(req.body.id, req.body.token).then((ans) => {
      // console.log('[ ',ans ,' ]');
      req.client=ans;
      if (ans[0].id) next();
    },
    function ()  {console.log('notOK');res.send('not verified');})    
  })

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) =>{ res.send('Hello World post!')

}   );

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 