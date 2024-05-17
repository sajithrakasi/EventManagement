const mongoose=require('mongoose')

const contactSchema=new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    message:String,
     Comment:String
})

const ContactModel=mongoose.model('UserContact',contactSchema)

module.exports=ContactModel