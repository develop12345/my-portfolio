import React from 'react'
import './experience.css'
import employeemanagement from '../../assets/employee-management.jpg'
import contactmanager from '../../assets/contactmanager.jpg'
import tourtravels from '../../assets/tour-travel.jpg'
import invoicegen from '../../assets/Invoice-gen.jpg'

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
            id: 2,
            image: employeemanagement,
            title: 'Employee Management Application',
            description: 'This is a CRUD Application created using jsp and servlets it can manipulate the data of employee. You can Create, Update, Delete and Read the data of employee Here can be used for managing data of employees for organizations.',
            github: 'https://github.com/develop12345/CRUD-Applicaiton.git',
            demo: 'https://github.com/develop12345/CRUD-Applicaiton.git'
        },
        {
            id: 3,
            image: tourtravels,
            title: 'Tour and Travel Website',
            description: 'Created a portfolio Tour and travel website, integrated inquiry and contact forms for client reach and enquiry. Used Reactjs, html and Css for creating User Friendly and responsive  Interface.',
            github: 'https://www.yolotrips.co.in/',
            demo: 'https://www.yolotrips.co.in/'
        },
        {
            id: 4,
            image: invoicegen,
            title: 'Invoice Generator',
            description: 'Created a website for generating bulk inovices using Reactjs, for invoices Html Css template was used, User can copy paste their data on dynamic table and then can generate the invoices by simply clicking on template button than download it using print button',
            github: 'https://github.com/develop12345/invogen.git',
            demo: 'https://github.com/develop12345/invogen.git'
        }

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