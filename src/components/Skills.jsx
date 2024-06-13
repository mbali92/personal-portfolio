import React, { useState } from 'react'
import imageOne from "../assets/hero_image3.png"

function Skills() {
  const [skillsBox, setSkillsBox] = useState(1);
  

  return (
      <>
        <div className="skills_section" id="skills_section">
          <div className="section_container">
            <div className="page_row skills_row">
              <div className="section_header content_col_left">
              <h1>My Programming Skills & knowledge</h1>
              <p className='page_paragraph'>My skill section highlights my adeptness in different programming languages.
             </p>
              </div>
              <div className="skills_details content_col_right">
                <div className="skills_details_text">
                  <h6 onClick={()=>setSkillsBox(1)} ><p>01</p> front end development</h6>
                  <div className='skills_description' style={{height: skillsBox == 1 ? "100%" :0 }}>
                      <p className='page_paragraph'>During my career as a developer, I have honed my skills and knowledge in various front-end languages, including:</p>
                      <span>React</span>
                      <span>JavaScript</span>
                      <span>CSS</span>
                      <span>HTML</span>
                      <span>TypeScript</span>
                      <span>NodeJS</span>
                  </div>
                </div>
                <div className="skills_details_text">
                  <h6 onClick={()=>setSkillsBox(2)}><p>02</p>Back End development</h6>
                  <div className='skills_description' style={{height: skillsBox == 2 ? "100%" :0}}>
                  <p className='page_paragraph'>During my career as a developer, I have honed my skills and
                    knowledge in various back-end languages, including:</p>
                      <span>SpringBoot</span>
                      <span>Java</span>
                      <span>PHP</span>
                      <span>Spring Security</span>
                  </div>
                </div>
                <div className="skills_details_text">
                  <h6 onClick={()=>setSkillsBox(3)}><p>03</p> Database</h6>
                  <div className='skills_description' style={{height: skillsBox == 3 ? "100%" :0}}>
                  <p className='page_paragraph'>During my career as a developer, I have honed my skills and knowledge in various
                    database technologies, including:</p>
                    <span>MySQL</span>
                    <span>Spring JPA</span>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </>
  )
}

export default Skills