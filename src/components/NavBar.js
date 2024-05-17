import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from './Auth'
import image4 from '../images/user1.png'
export default function NavBar() {
  const auth = useAuth()
  
  return (
   <nav id="header-nav">
    <NavLink to = "/">Home</NavLink>
    <NavLink to = "/about">About</NavLink>
    <NavLink to = "/service">Service</NavLink>
   
    <NavLink to = "/profile">Profile</NavLink>
    {!auth.user && <NavLink to = "/login">Login</NavLink>}
   
    {!auth.user &&<NavLink to = "/signup">Signup</NavLink>}
    <NavLink to ="/order">Book Now</NavLink>
    <NavLink to ="/admin">Admin</NavLink>
    <NavLink to ="/cart">View Cart</NavLink>
    <NavLink to ="/contact">Contact</NavLink>
  <div id='user-name'>
    <img id="logo-user"src={image4} alt=''/><h3 className="animate-charcter">{auth.user}</h3>
    </div>
   </nav>
  )
}
