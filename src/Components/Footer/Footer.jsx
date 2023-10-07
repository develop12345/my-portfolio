import React from 'react'
import './footer.css'
import {AiFillLinkedin, AiFillInstagram, AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
     <a href='#' className='footer__logo'>SHYAM</a>

     <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#skills'>Skills</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#contact'>Hire me</a></li>
     </ul>

     <div className="footer__socials">
      <a href='https://facebook.com'><AiFillFacebook></AiFillFacebook></a>
      <a href='https://instagram.com'><AiFillInstagram></AiFillInstagram></a>
      <a href='https://www.linkedin.com/in/shyam-upadhyay-1586aa214/'><AiFillLinkedin></AiFillLinkedin></a>
     </div>
    </footer>
  )
}

export default Footer