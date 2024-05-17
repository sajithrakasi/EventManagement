const express=require('express')
const users=require('./routes/user')
const sign=require('./routes/sign')
const contact=require('./routes/contact')

const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/UserDatas')
mongoose.connection.on('connected',()=>{
    console.log('mongoose connected')
})

app.get('/',(req,res)=>{
    res.send("Backend server")
})
app.use('/users',users)
app.use('/sign',sign)
app.use('/contact',contact)
app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})
