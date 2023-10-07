import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaHackerrank} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/shyam-upadhyay-1586aa214/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/develop12345' target='_blank'><BsGithub/></a>
        <a href='https://www.hackerrank.com/shyamupadhayay9' target='_blank'><FaHackerrank/></a>
    </div>
  )
}

export default HeaderSocials