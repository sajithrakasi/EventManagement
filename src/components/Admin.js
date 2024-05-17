import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Admin() {
    const[list,setList]=useState([])
  

    useEffect(()=>{
        axios.get('http://localhost:3004/booked')
        .then(res=>setList(res.data))
      
    },[])
  
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Sl.No</th>
                    <th>Customer Id</th>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>contact</th>
                    <th>Events</th>
                    <th>Event Address</th>
                    <th>event Date</th>
                </tr>
            </thead>
           <tbody>
            {list.map((x,index)=>(
            <tr>
                <td>{index+1}</td>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.contact}</td>
                <td>{x.events}</td>
                <td>{x.eventDate}</td>
                <td>{x.eventPlace}</td>
            </tr>
            ))}
           </tbody>
        </table>
    
    </div>
  )
}
