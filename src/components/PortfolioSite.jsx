import React from 'react'
import workImageOne from "../assets/project-image9.png"; 
import workImageTwo from "../assets/project-image10.png"; 
import Navbar from './Navbar'

function PortfolioSite() {
  return (
      <>
        <Navbar/>
        <div className="work-section">
              <div className="section_container">
                  <a href='/coffee' id="work_btn">next project <i className="lni lni-arrow-right"></i></a>
                <div className="page_row">
                    <div className="work_left_col">
                          <h1>Web developer portfolio</h1> 
                          <p>A web developer portfolio showcasing completed projects, relevant industry skills, and qualifications.
                          </p>
                          <div className="work_type">
                              <div>
                                  <span>client</span>
                                  <span>Web developer</span>
                              </div>
                              <div>
                                  <span>Duration</span>
                                  <span>Two days</span>
                              </div>
                              <div>
                                  <span>Github</span>
                                  <span><a href="">click to view github</a></span>
                              </div>
                              <div>
                                  <span>category</span>
                                  <span>personal</span>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div className="page_row work_info">
                       <div className="work_images">
                          <img id="big_work_image" src={workImageOne} alt="" />
                      </div>
                      <div className="work_description">
                          <div className="challenges work_details">
                              <h6>1. Challenges</h6>
                                <p>During the construction of the website I faced a list of challenges 
                            which offered great learning opportunities and skills advancement.</p>
                                <span>We had to ensure the site was responsive and accessible across different devices.</span>
                          </div>
                      </div>
                  </div>
                  <div className="work_gallery" style={{display:"none"}}>
                      <div className="page_row">
                      
                      </div>
                  </div>
                  <div className="page_row work_info">
                      <div className="work_description">
                          <div className="challenges work_details">
                              <h6>2. Technologies used</h6>
                             <p>During the development of this website, I utilized my skills and knowledge of various frontend programming languages.</p>
                             <span>I employed React frame work JavaScript, HTML and
                                  CSS to build the functionality and layout of the site.
                              </span>
                          </div>
                      </div>
                       <div className="work_images">
                              <img id="big_work_image" src={workImageTwo} alt="" />
                      </div>
                      
                  </div>
            </div>
        </div>
      </>
  )
}

export default PortfolioSite