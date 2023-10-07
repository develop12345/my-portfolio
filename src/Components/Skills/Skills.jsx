import React from 'react'
import './skill.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">

            <article className="skills__detail">
            <BsFillPatchCheckFill className='skills__detail-icon'/>
            <div>
            <h4>Html</h4>
            <small className='text-light'>Experiecned</small>
            </div>
            </article>

            <article className="skills__detail">
            <BsFillPatchCheckFill className='skills__detail-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experiecned</small>
            </div>
            </article>

            <article className="skills__detail">
            <BsFillPatchCheckFill className='skills__detail-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experiecned</small>
            </div>
            </article>

            <article className="skills__detail">
            <BsFillPatchCheckFill className='skills__detail-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="skills__detail">
            <BsFillPatchCheckFill className='skills__detail-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="skills__detail">
            <BsFillPatchCheckFill className='skills__detail-icon'/>
            <div>
            <h4>Html</h4>
            <small className='text-light'>Experiecned</small>
            </div>
            </article>

          </div>
        </div>
        
        <div className="skills__backend">
        <h3>Backend Development</h3>
          <div className="skills__content">

            <article className="skills__detail">
            <BsFillPatchCheckFill className='skills__detail-icon'/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="skills__detail">
            <BsFillPatchCheckFill className='skills__detail-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="skills__detail">
            <BsFillPatchCheckFill className='skills__detail-icon'/>
            <div>
            <h4>Spring</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="skills__detail">
            <BsFillPatchCheckFill className='skills__detail-icon'/>
            <div>
            <h4>Springboot</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills