import React from 'react'

function About() {
  return (
      <>
        <div className="about-section" id="about_section">
            <div className="section_container">
                <div className="page_row about_row">
                    <div className="section_header content_col_left">
                      <h1>My Professional background story</h1>
              <p className='page_paragraph'>As a software developer, I embarked on my journey with a
                passion for problem-solving and a thirst for learning. Armed with my software development experience and a record of 100% project completion, I delved into the world of coding,
                eager to apply my knowledge to real-world projects.</p>
                    </div>
                    <div className="about_details content_col_right">
                        <h5>Education & Experience</h5>  
              <div className="about_details_content">
                <div className="about_timeline">
                              <span className='experience_year'>2023-present</span>
                              <h6>Software development intern </h6>
                              <h4>Tshimologong - Digital Innovation Precinct</h4>
                              <p className='page_paragraph'>
                    During my tenure as a software developer intern, I gained valuable hands-on experience in Java, Spring Boot, React,
                    Node.js, and TypeScript. 
                              </p>
                          </div>
                          <div className="about_timeline">
                              <span className='experience_year'>2018</span>
                              <h6>Honours in Geospatial data science </h6>
                              <h4>Witwatersrand university</h4>
                              <p className='page_paragraph'>
                                During my Geospatial Data Science Honors degree, I cultivated proficiency in
                                 a diverse array of programming languages such as SQL, JavaScript and R. 
                              </p>
                          </div>  
                          
                
                        </div>
                    </div>  
                      
                </div>  
            </div>
        </div>
      </>
  )
}

export default About