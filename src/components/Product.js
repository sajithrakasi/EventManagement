import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Product() {
  return (
    <div>
      <input type="text" placeholder="search here"/>
      <nav>
        <Link to="new">New</Link>
        <Link to="offer">Offer</Link>
      </nav>
      <Outlet/>
    </div>
  )
}
