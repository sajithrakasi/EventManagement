import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
export default function Users() {
    const[searchparams,setSearchparams]=useSearchParams()
    const isActive = searchparams.get('filter')==='active'
  return (
    <div>
      user page<br></br>
      <Outlet/>
      <button onClick={()=>{setSearchparams({'filter':'active'})}}>Active users</button>
      <button onClick={()=>{setSearchparams({})}}>All Users</button>
      {isActive?"Active users only":"All users"}
    </div>
  )
}
