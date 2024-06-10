import React from 'react'
import workImageOne from "../assets/project-image4.png"; 
import workImageTwo from "../assets/school-image1.png"; 
import workImageThree from "../assets/project-image3.png"; 
import Navbar from './Navbar'



function SchoolWebsite() {
  return (
        <>
            <Navbar/> 
     <div className="work-section">
              <div className="section_container">
                  <a href='/pms' id="work_btn">next project <i className="lni lni-arrow-right"></i></a>
                <div className="page_row">
                    <div className="work_left_col">
                          <h1>School website and administrative dashboard</h1> 
                          <p>A school administrative website featuring detailed information about the
                              school and a comprehensive dashboard for efficient content management.
                          </p>
                          <div className="work_type">
                              <div>
                                  <span>client</span>
                                  <span>Secondary school</span>
                              </div>
                              <div>
                                  <span>Duration</span>
                                  <span>1 month </span>
                              </div>
                              <div>
                                  <span>Github</span>
                                  <span><a href="https://github.com/mbali92/School_Java_React_Website">click to view github</a></span>
                              </div>
                              <div>
                                  <span>category</span>
                                  <span>education</span>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div className="page_row work_info">
                       <div className="work_images">
                          <img id="big_work_image" src={workImageOne} alt="" />
                          <img src={ workImageTwo} id="small_img_one" alt="" />
                      </div>
                      <div className="work_description">
                          <div className="challenges work_details">
                              <h6>1. Challenges</h6>
                                <p>During the construction of the website I faced a list of challenges 
                            which offered great learning opportunities and skills advancement.</p>
                                <span>Had to create learn how to create concise and efficient functional
                                  algorithms which allows friendly user experience.</span>
                              <span>Ensured real-time updates of school information, requiring robust data
                                  synchronization and timely content management.</span>
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
                              <p>During the development of this website, I utilized my skills and knowledge of various frontend and backend programming languages.</p>
                                <span>I employed React frame work JavaScript,TypeScript, HTML and
                                    CSS to build the functionality and layout of the site. </span>
                                <span>I utilized Java and Spring Boot framework to build the site's API's,
                                    back end's functionality and security.</span>
                                <span>The website's database structure and design was developed with MySQL and spring JPA </span>
                          </div>
                      </div>
                       <div className="work_images">
                              <img id="big_work_image" src={workImageThree} alt="" />
                      </div>
                      
                  </div>
            </div>
        </div>
        </>
  )
}

export default SchoolWebsite