import React from 'react'
import './certificate.css'
import java from '../../assets/java.jpg'
import html from '../../assets/htmlcss.jpg'
import salesforce from '../../assets/salesforce.jpg'
import sql from '../../assets/sql.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const Certificate = () => {
  const data=[
    {
      avatar: java,
      name: 'Mastering Java Certificate',
      desc: 'The "Mastering Java for Beginners and Experts" certificate program offered by Infosys Springboard. This comprehensive course equipped me with the skills and knowledge to excel in Java programming, from foundational concepts to advanced techniques.',
      link: 'https://drive.google.com/file/d/1itwikwUzl5YodJyFJNhjDIzBPM3KSVkt/view?usp=sharing'
    },
    {
      avatar: sql,
      name: 'SQL Certificate',
      desc: 'I am proud to hold a HackerRank SQL certificate, which I earned through rigorous testing and practical application of SQL skills. This certification demonstrates my proficiency in managing and querying relational databases',
      link: 'https://www.hackerrank.com/certificates/089cb6128ec0'
    },
    {
      avatar: salesforce,
      name: 'Salesforce Virtual Internship Certificate',
      desc: 'I successfully completed a Salesforce developer internship, where I gained hands-on experience in Salesforce fundamentals and honed my skills through real-world projects. This certificate attests to my proficiency in leveraging Salesforce to drive business solutions and underscores my commitment to continuous learning and professional growth',
      link: 'https://smartinternz.com/internships/salesforce_certificates/412f1f1340a245ffec9fb8d47654da57'

    },
    {
      avatar: html,
      name: 'Html and CSS Project Certificate Google Developer',
      desc: '"I earned this HTML and CSS certificate through dedicated work on my portfolio project. It validates my ability to design and develop responsive web interfaces, showcasing my commitment to creating visually appealing and user-friendly websites',
      link: 'https://cert.devtown.in/verify/Z1SuCsT'

    }

  ]
  return (
    <section id='certificates'>
     <h2>Certificates</h2>

     <Swiper className="container certificate__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
     >
    {
      data.map(({avatar, name, desc, link})=>{
        return(
          <SwiperSlide className='certificate'>
          <div className="certificate__image">
            <img src={avatar} alt='java'></img> 
             </div>
            <h5>{name}</h5>
            <small className='certificate__desc'>
            {desc}  
            </small> 
            <div className="certificate__item-cta">
         <a href={link} target='_blank' className='btn'>View</a>
         </div>
        </SwiperSlide>
        )
      })
    }
     </Swiper>
    </section>
  )
}

export default Certificate