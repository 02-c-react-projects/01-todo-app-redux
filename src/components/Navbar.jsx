import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <ul className="nav">
         <li><Link to="/">Home</Link></li>
         <li><Link to="/notes">Notes</Link></li>
         <li><Link to="/todos">Todos</Link></li>
       </ul>
    </div>
  )
}
