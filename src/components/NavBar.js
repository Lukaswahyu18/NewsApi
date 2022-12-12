import React from 'react'
import './NavBar.css'
import HamburgerDrawer from './HamburgerDrawer'

const NavBar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: 'pointer' }}
        src="https://download.logo.wine/logo/BBC_News/BBC_News-Logo.wine.png"
        height="80"
        alt="logo"
      />
    </div>
  )
}

export default NavBar
