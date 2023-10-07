import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rp9sklu', 'template_fj8gxlh', form.current, 'EkZUM1YQ6FWN0f1KT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <AiTwotoneMail className='contact__option-icon'></AiTwotoneMail>
            <h4>Email</h4>
            <h5>shyamupadhayay9@gmail.com</h5>
            <a href='mailto:shyamupadhayay9@gmail.com'>Send a mail</a>
          </article>

          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon'></RiWhatsappFill>
            <h4>Whatsapp</h4>
            <h5>Shyam Upadhyay</h5>
            <a href='https://wa.me/917878319118' target='blank'>Send message</a>
          </article>
        </div>

        {/* ------------contact form-------------- */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact