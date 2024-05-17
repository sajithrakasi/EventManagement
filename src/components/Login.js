import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import image3 from '../images/banner-11.png'
import { useAuth } from './Auth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userList, setUserList] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/sign/get')
      .then(res => setUserList(res.data))
     
  },[])

  const handleLogin = (e) => {
    e.preventDefault()
    const user = userList.find(x => x.email === email)
    if (user) {
      if (user.password === password) {
        auth.login(user.name)
        navigate('/')
       }
       else {
        setErrorMessage('Password is incorrect')
      }
     } 
    else {
      setErrorMessage('User not found')
    }
  }

  return (
    <div id="book" style={{ backgroundImage: `url(${image3})` }}>
      <div className='content'>
        <h2>Login Here</h2>
      </div>
      <div className='login-box'>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          <button type='submit'>Login</button>
        </form>
      </div> 
      {errorMessage}
    </div>
  );
}
