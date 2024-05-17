const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const ContactModel=require('../models/contact-model')

router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send("contact page")
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    const newContact=new ContactModel(req.body)

    newContact.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("contact post page")
})

router.get('/get',(req,res)=>{
    ContactModel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})


module.exports=router