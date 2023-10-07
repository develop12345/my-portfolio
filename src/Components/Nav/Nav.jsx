import React from 'react'
import {AiOutlineHome, AiOutlineUser, AiOutlineCodeSandbox, AiOutlineMessage} from 'react-icons/ai'
import {BsBookmarkStar} from 'react-icons/bs'
import './Nav.css'
import { useState } from 'react'
const Nav = () => {
  const[activeNav, setActive] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActive('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActive('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser/></a>
      <a href="#skills" onClick={()=>setActive('#skills')} className={activeNav === '#skills' ? 'active':''}><AiOutlineCodeSandbox/></a>
      <a href="#experience" onClick={()=>setActive('#experience')} className={activeNav === '#experience' ? 'active':''}><BsBookmarkStar/></a>
      <a href="#contact" onClick={()=>setActive('#contact')} className={activeNav === '#contact' ? 'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav