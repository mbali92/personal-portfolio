import React from 'react'
import workImageOne from "../assets/project-image1.png"; 
import workImageTwo from "../assets/project-image2.png"; 
import workImageThree from "../assets/coffee-image1.png"; 
import Navbar from './Navbar'


function Coffeeshop() {
    return (
        <>
            <Navbar />
            <div className="work-section">
                <div className="section_container">
                     <a href='/school' id="work_btn">next project <i className="lni lni-arrow-right"></i></a>
                <div className="page_row">
                    <div className="work_left_col">
                          <h1>Coffee Shop</h1> 
                            <p>A robust online e-commerce coffee shop platform designed to help coffee
                                shop owners expand their clientele, reaching a diverse and global audience.
                                This platform offers a seamless shopping experience with features such as secure payment processing,
                                user-friendly navigation, and customizable product listings.
                            </p>
                          <div className="work_type">
                              <div>
                                  <span>client</span>
                                  <span>Coffee shop owners</span>
                              </div>
                              <div>
                                  <span>Duration</span>
                                  <span>2 weeks</span>
                              </div>
                              <div>
                                  <span>Github</span>
                                  <span><a href="https://github.com/mbali92/java-react-coffee-shop">click to view github</a></span>
                              </div>
                              <div>
                                  <span>category</span>
                                  <span>e-commerce</span>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div className="page_row work_info">
                       <div className="work_images">
                          <img id="big_work_image" src={workImageOne} alt="" />
                          <img src={ workImageThree} id="small_img_one" alt="" />
                      </div>
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
                  </div>
                  <div className="work_gallery" style={{display:"none"}}>
                      <div className="page_row">
                      
                      </div>
                  </div>
                  <div className="page_row work_info">
                      <div className="work_description">
                         <div className="challenges work_details">
                              <h6>1. Challenges</h6>
                                <p>During the construction of the website I faced a list of challenges 
                            which offered great learning opportunities and skills advancement.</p>
                                <span> Implementing features that allow users to easily filter products based
                                    on various criteria such as size, type, and price range. </span>
                                <span>Developing a website with high-end feature functionality and seamless
                                    shopping experience across various devices.</span>
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

export default Coffeeshop