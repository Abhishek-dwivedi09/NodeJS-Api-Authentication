const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
const Routes = require('./routes/auth.route')
 require('dotenv').config()
 require('./helper/init_mongodb')
 const {verifyAccessToken} = require('./helper/jwt_helper')

 const app = express()

 app.use(morgan('dev'))

 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

 app.get('/', verifyAccessToken, async (req,res,next) => {
    
    res.send("hello world");
})

app.use('/api',Routes)

app.use(async (req,res,next)=>{
 //   const eroor = new Error('Not Found')
  //  eroor.status = 404
   // next(eroor)

   next(createError.NotFound())
})

 app.use((err,req,res,next)=>{
     res.status(err.status || 500)
     res.send({
        error : {
            status : err.status||500,
            message: err.message
        },
     })
 })
 const PORT = process.env.PORT || 3000

  

 app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
 })