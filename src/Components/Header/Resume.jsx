import React from 'react'
import CV from '../../assets/Resume-updated.pdf'
const Resume = () => {
  return (
    <div className="res">
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Resume