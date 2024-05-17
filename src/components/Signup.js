import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import image3 from '../images/wed.jpg'

export default function Signup() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setpassword]=useState("")
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    axios.post('http://localhost:3001/sign/post',{
      name,email,password
    })
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    navigate('/login')
  }
  return (
    <div id="book"style={{ backgroundImage:`url(${image3})` }}>
       <div className='content'><h2>Signup Here</h2>
                <h2>Signup Here</h2>
                </div>
       <div className='login-box'>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br><br></br>
        <label>password:</label>
        <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)}/><br></br><br></br>
        <button type='submit'>Signup</button>
      </form>
      </div>
  
    </div>
  )
}
