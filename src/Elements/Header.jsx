import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <NavLink to= "/"> Page1</NavLink>
      <NavLink to= "/page2"> Page2</NavLink>
    </div>
  )
}

export default Header