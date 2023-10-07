import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {PiFolders} from 'react-icons/pi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
       <div className="container about__container">
        <div className="about__me">
<div className="about__me-image">
  <img src={ME} alt='me'></img>
</div>
</div>

        <div className="about__content">
<div className="about__cards">
<a  style={{color: 'var(--color-white)'}} href='#certificates' >
        <article className="about__card">
         <FaAward className='about__icon'/>
         <h5>Certificates</h5>
         <small>Verified certificates</small>
         
        </article></a>

        <a  style={{color: 'var(--color-white)'}} href='#experience' >
        <article className="about__card">
         <PiFolders className='about__icon'/>
         <h5>Projects</h5>
         <small>Live Projects</small>
        </article>
</a>

<a  style={{color: 'var(--color-white)'}} href='#skills' >
        <article className="about__card">
         <FaAward className='about__icon'/>
         <h5>Skills</h5>
         <small>Applied skills</small>
        </article>
        </a>
        </div>
        

        <p>
        Hello, I'm Shyam, a final-year Computer Science and Engineering student at Government Engineering College Bikaner. With a strong foundation in Java, SQL, and expertise in front-end technologies like HTML, CSS, and React.js, I'm passionate about crafting innovative software solutions. I've honed my skills through hands-on projects in web application development and database management, and I'm eager to bring my problem-solving abilities and creativity to your team. Let's connect and explore the possibilities of working together to make technology work for you.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
       </div>
    </section>
  )
}

export default About