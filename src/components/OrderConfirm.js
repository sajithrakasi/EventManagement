import React, { useState } from 'react'
import image3 from '../images/banner-11.png'
import axios from 'axios'
import { useAuth } from './Auth'
export default function OrderConfirm() {
  const auth=useAuth()
    const[email,setEmail]=useState("")
    const[contact,setContact]=useState("")
    const[events,setEvents]=useState("")
    const[eventDate,setEventDate]=useState("")
    const[eventPlace,setEventPlace]=useState("")
    const handleSubmit = (e)=>{
      e.preventDefault()
        axios.post('http://localhost:3001/users/post',{
          name:auth.user,email,contact,events,eventDate,eventPlace
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        alert("your order is booked")
       
      }
  return (
    <div id="book"style={{ backgroundImage:`url(${image3})` }}>
     <div id="form-box">
       <form id="form-id" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
        <label>Contact:</label>
        <input type="number"value={contact} onChange={(e)=>setContact(e.target.value)}></input><br></br><br></br>
        <label>Events:</label>
        <select value={events} onChange={(e)=>setEvents(e.target.value)}>
            <option value="select">Select Events</option>
            <option value="marraige">Marraige Event</option>
            <option value="birthday">Birthday Event</option>
            <option value="social">Social Event</option>
            <option value="corporate">Corporate Event</option>
           
        </select><br></br><br></br>
        <label>Event Date:</label>
        <input type="date" value={eventDate} onChange={(e)=>setEventDate(e.target.value)}></input><br></br><br></br>
        <label>Event Place:</label>
        <textarea value={eventPlace} onChange={(e)=>setEventPlace(e.target.value)}></textarea><br></br><br></br>
        <button type="submit">Book Now</button>
       
       </form>
       </div>
    </div>
    
  )
}
