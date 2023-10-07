import React from 'react'
import Resume from './Resume'
import ME from '../../assets/shyam.png'
import HeaderSocials from './HeaderSocials'
import './header.css'
const Header = () => {
  return (
    <header>
     <div className="container header__container">
     <h5>Hello I'm</h5>
     <h1> Shyam Upadhyay</h1>
     <h5 className="text-light">Fullstack Developer</h5>
     <Resume/>
     <HeaderSocials/>
     <div className="me">
        <img src={ME} alt='shyam'></img>
     </div>

     <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header