import React from 'react'
import { NavLink } from 'react-router-dom'

export function Navbar({dogs}) {
  const navLinks = dogs.map(dog => (
    <NavLink className='link' key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
      {dog.name}
    </NavLink>
  ))
  return (
    <nav className="navbar">
      <NavLink className='link' exact to='/dogs'>Home</NavLink>
      {navLinks}
    </nav>
  )
}

export default Navbar