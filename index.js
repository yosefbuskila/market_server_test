const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
var cors = require('cors')

// const usersConnect=require('./lib/users/userManagement')
// const userRouter = require('./lib/users/routeUser');
// const generalRouter=require('./routers/general/routerGeneral')
// const shopRouter=require('./routers/shop/routerShop')
// const adminRouter=require('./routers/admin/routerAdmin')

const app = express()

// app.use(cors())
// app.use(express.static('public'))

// app.use(['/home','/market','/logIn','/reg','/admin'],function(req, res) {
//   // Use res.sendfile, as it streams instead of reading the file into memory.
//   res.sendfile(__dirname + '/public/index.html');
// });
// // app.use((req, res, next)=>{
// //   console.log('bdyFirst', req) 
// //   next()
// // })

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// // app.use(bodyParser.urlencoded)

// app.use(fileUpload({
//   limits: { fileSize:  1024 * 1024 }, 
// }));

// app.use('/user', userRouter);
// app.use('/gen', generalRouter);
const port = process.env.PORT;
if (port == null || port == "") {
  p
}

// app.use(function (req, res, next) {
//     console.log('bd',req.body)
//     usersConnect.chakConnect(req.body.id, req.body.token).then((ans) => {
//       // console.log('[ ',ans ,' ]');
//       req.client=ans;
//       if (ans[0].id) next();
//     },
//     function ()  {console.log('notOK');res.json({"sucess": false,"Details":"not verified"});})    
//   })
//   app.use('/api', shopRouter);
//   app.use('/admin', adminRouter);

// app.post('/', (req, res) =>{ res.send('Hello World post!')

// }   );

app.get('/', (req, res) =>{console.log('hi yosef17!!'); res.send('Hello World17!')})

app.listen(port, () => console.log(`app listening on port ${port}!`)); 