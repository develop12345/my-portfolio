import React from 'react'
import './experience.css'
import contactmanager from '../../assets/contactmanager.jpg'

const Experience = () => {
    const data=[
        {
            id: 1,
            image: contactmanager,
            title: 'Smart Contact Manager',
            description: 'Smart Contact Manager is a web application built using Java, Spring Boot, SQL, Thymeleaf, CSS, JavaScript, HTML, and Bootstrap. It allows users to register, log in, and manage their contacts. Users can store and access their contact information, making it a convenient solution for keeping track of personal and professional contacts.',
            github: 'https://github.com/develop12345/SmartContactManager.git',
            demo: 'https://github.com/develop12345/SmartContactManager.git'
        },
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBBTZc-yeKRx2gQj8x2S3ghOIHhm50H1A_oBMBooaHOx3_9K2QYQAVG-f3Z8VCjnOV1Q&usqp=CAU',
            title: 'Under Process......',
            description: 'Working on project will be available soon......',
            github: '#',
            demo: '#'
        },

    ]
  return (
    <section id='experience'>
        <h5>My Experience</h5>
        <h2>Projects</h2>
        <div className="container experience__container">
         
        {
            data.map(({description, image, title, github, demo})=>{
                return(
                    <article className='portfolio__item'>
         <div className="portfolio__image">
         <img src={image} alt='portfolio'></img>
         </div>
         <h3>{title}</h3>
         <small className='text-light'>{description}</small>
         <div className="portfolio__item-cta">
         <a href={github} className='btn'>Github</a>
         <a href={demo} className='btn btn-primary'>Demo</a>
         </div>
         </article>
                )
            })
        }

        </div>
    </section>
  )
}

export default Experience