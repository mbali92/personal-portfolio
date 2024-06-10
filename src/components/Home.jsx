import React from 'react'
import Header from './Header'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'

function Home() {
    return (
        <>
            <div className="site_container">
                <Header />
                <About />
                <Project />
                <Skills />
                <Contact />
            </div>
        </>
    
  )
}

export default Home