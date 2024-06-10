import React,{useState} from 'react'
import heroImage from "../assets/hero_image1.png"
import Navbar from './Navbar'


function Header() {
  const [toolTip, setToolTip] = useState(); 
  const showToolTip = (toolNo) => {
    setToolTip(toolNo)
  }
    return (
      <>
        <div className="header_section">
          <Navbar/>
          <div className="section_container">
            <div className="page_row header_row">
              <div className="hero_text">
                <span id='hero_subtitle'>Hello welcome, I am Mbalentle </span>
                <h1>A Computer software developer</h1>
                <p>Unlocking possibilities through lines of code. I am a passionate software
                  developer dedicated to creating elegant solutions to complex problems.
                </p>
                <div className="header_btns">
                  <a className='project_button'>
                    <span>view portfolio</span>
                    <i className="lni lni-arrow-right"></i>
                  </a>
                  <div className="header_socials page_row">
                    <a href='www.linkedin.com/in/mbalentle-mkhwanazi-4661a582'>
                      <i className="lni lni-linkedin"></i>
                    </a>
                    <div>
                       <a href='https://github.com/mbali92?tab=repositories'>
                       <i className="lni lni-github"></i>
                    </a>
                    </div> 
                    <div>   
                      <span  style={{opacity: toolTip == 2 ? 1: 0}} className='whatsapp'>+27 812061451</span>
                      <i onMouseOver={() => showToolTip(2)} onMouseLeave={() => showToolTip(0)} className="lni lni-whatsapp"></i>
                    </div>
                  </div>
                </div>
              </div>
              <img src={heroImage} alt="" />
            </div>
          </div>
        </div>  
        
      </>

  )
}

export default Header