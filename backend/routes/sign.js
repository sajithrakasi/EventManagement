const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const SignupModel=require('../models/signup-model')

router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send("signup page")
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    const newSignup=new SignupModel(req.body)

    newSignup.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("signup post page")
})

router.get('/get',(req,res)=>{
    SignupModel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})


module.exports=router