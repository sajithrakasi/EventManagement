import React from 'react'
import { useParams } from 'react-router-dom'
export default function UserDetails() {
  return (
    <div>
      Details of the user {useParams.userId}
    </div>
  )
}
