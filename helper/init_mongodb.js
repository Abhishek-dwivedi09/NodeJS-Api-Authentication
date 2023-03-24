const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI,{dbName:process.env.DB_NAME}).then(
    ()=>{
        console.log("db is connected")
    }
).catch((err)=>{
    console.log(err.message)
})

mongoose.connection.on('connected', ()=>{
    console.log("mongoose connected to the db")
})

mongoose.connection.on('error', (err)=>{
    console.log(err.message)
})

mongoose.connection.on('discoonect', ()=>{
    console.log('mongoose connection is discoonected')
})

process.on('SIGINT', async()=>{
    await mongoose.connection.close()
    process.exit(0)
})





