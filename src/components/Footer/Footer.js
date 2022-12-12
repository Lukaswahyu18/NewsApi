import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="iconContainer">
        <a href="https://www.instagram.com/nore.web.id/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/norewebid" target="_blank">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://nore.web.id/" target="_blank">
          <i className="fa-thin fa-globe"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
