import React from 'react'
import workImageOne from "../assets/project-image8.png"; 
import workImageTwo from "../assets/school-image1.png"; 
import workImageThree from "../assets/project-image5.png"; 
import Navbar from './Navbar'



function ProjectManagement() {
    return (
        <>
            <Navbar/> 
     <div className="work-section">
                <div className="section_container">
                    <a href='/portfolio' id="work_btn">next project <i className="lni lni-arrow-right"></i></a>
                <div className="page_row">
                    <div className="work_left_col">
                          <h1>Project management system</h1> 
                            <p>A comprehensive project management system equipped with intuitive features, robust functionality,
                                and advanced search algorithms. This platform empowers developers
                                to efficiently manage tasks and consistently meet project deadlines with ease.
                          </p>
                          <div className="work_type">
                              <div>
                                  <span>client</span>
                                  <span>Tshimolohong precint</span>
                              </div>
                              <div>
                                  <span>Duration</span>
                                  <span>4 month </span>
                              </div>
                              <div>
                                  <span>Github</span>
                                  <span><a href="https://github.com/mbali92/Project-Management-System">click to view github</a></span>
                              </div>
                              <div>
                                  <span>category</span>
                                  <span>technology</span>
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
                                <span>One significant challenge we faced was learning to develop a well-structured Entity-Relationship Diagram (ERD) and relational database schema. This was crucial for creating a
                                    robust, scalable, and efficient foundation for our backend APIs. </span>
                                <span>
                                    Another challenge we faced was integrating third-party OAuth2 login with our site and ensuring prolonged user sessions. We needed to ensure the system remembered users
                                    and allowed them to log in using credentials from other platforms.
                                </span>
                               
                          </div>
                      </div>
                  </div>
                  <div className="page_row work_info">
                      <div className="work_description">
                          <div className="challenges work_details">
                              <h6>2. Technologies used</h6>
                                <p>During the development of this website application, I utilized my skills and knowledge of various frontend and backend programming languages.</p>
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

export default ProjectManagement