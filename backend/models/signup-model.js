const mongoose=require('mongoose')

const signupSchema=new mongoose.Schema({
    name:String,
    email:String,
   password:String
    
})

const SignupModel=mongoose.model('UserSignup',signupSchema)

module.exports=SignupModel