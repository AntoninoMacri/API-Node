import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import usersRoutes from './routes/users.js'

const app=express()
const PORT = process.env.PORT || 3000
const CONNECTION_URL='mongodb://localhost:27017/corsoapinode'

app.use(express.json())
app.use(cors())
app.use('/users', usersRoutes) //http://localhost:3000/users

app.get('/',(req,res)=> res.send("Benvenuto nella homepage"))

mongoose.connect(CONNECTION_URL)
.then(
    ()=>{
        app.listen(PORT, ()=>{
            console.log(`server running on port: ${PORT}`)

        })
})
.catch(error=>console.error(error))

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`)
})
