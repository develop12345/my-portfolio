import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import Certificate from './Components/Certificates/Certificate'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
     <Header></Header>
     <Nav></Nav>
     <About></About>
     <Skills></Skills>
     <Experience></Experience>
     <Certificate></Certificate>
     <Contact></Contact>
     <Footer></Footer>
     
    </div>
  )
}

export default App