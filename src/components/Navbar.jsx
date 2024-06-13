import React,{useState} from 'react'

function Navbar() {
  const [mobileLinks, setmobileLinks] = useState(false);
   
  return (
      <>
        <div className="navbar">
          <div className="section_container">
            <div className="page_row">
              <h6 id='logo'>EnhleM</h6>
              <div className="navlinks">
                  <a  href="/">Home</a>
                  <a href="#about_section">About</a>
                  <a href="#project_section">Portfolio</a>
                  <a href="#skills_section">Skills</a>
              </div>  
            <div className='navbar_btns'>
              <a href="src/assets/Mbalentle Mkhwanazi Developer Resume.pdf"><i className="lni lni-download"></i></a>
                <a id='contact' href="#contact-section">Lets Talk</a>
              </div>
              <div onClick={()=>setmobileLinks(!mobileLinks)} className="menu_bar">
                <span></span>
              </div> 
          </div>
          <div style={{display:mobileLinks ?"block":"none"}} className="mobile_links">
            <a href="/">Home</a>
            <a href="#about_section">About</a>
            <a href="#project_section">Portfolio</a>
            <a href="#skills_section">Skills</a>
          </div>
          </div>
        </div>
      </>
  )
}

export default Navbar