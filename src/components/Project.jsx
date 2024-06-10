import React,{useState} from 'react'
import imageOne from "../assets/project-image3.png"
import imageTwo from "../assets/project-image4.png"
import imageThree from "../assets/project-image7.png"
import imageFour from "../assets/project-image8.png"
import imageFive from "../assets/project-image1.png"
import imageSix from "../assets/project-image2.png"
import imageSeven from "../assets/project-image9.png"
import imageEight from "../assets/project-image10.png"


function Project() {
    const [showProjects, setshowProjects] = useState(1);
    return (
      <>
            <div className="project-section" id="project_section">
                <div className="section_container">
                    <div className="section_header project_row">
                        <div className="content_col_left">
                            <h1 > My Recent completed projects </h1>
                        </div>
                        
                        <div id='project_title_text' className="content_col_right" >
                            <p className='page_paragraph' >
                                This portfolio project section showcases a curated selection of my diverse range of work, spanning
                                various disciplines and industries.
                            </p>
                        </div>
                    </div>
                    <div className="page_row project_row">
                        <div className="content_col_left project_images">
                            <div className='project_img' style={{display: showProjects== 1? "block":"none"}}>
                                <img src={imageOne} alt="" />
                                <img src={imageTwo} alt="" />
                            </div>
                              <div  className='project_img' style={{display: showProjects == 2 ? "block":"none"}} >
                                <img src={imageFour} alt="" />
                                <img src={imageThree} alt="" />
                            </div>
                            <div className='project_img' style={{display: showProjects == 3? "block":"none"}}>
                                <img src={imageFive} alt="" />
                                <img src={imageSix} alt="" />
                            </div>
                             <div className='project_img' style={{display: showProjects == 4? "block":"none"}}>
                                <img src={imageSeven} alt="" />
                                <img src={imageEight} alt="" />
                            </div>
                        </div>
                        <div className="content_col_right">
                            <div className="project_card" onMouseOut={()=>setshowProjects(1)}  onMouseOver={()=>setshowProjects(1)} >
                                <div className="project_title" >
                                    <span>education</span>
                                    <h6>School dashboard website </h6>
                                </div> 
                                <a href="/school">
                                    view project
                                    <i className="lni lni-arrow-top-right"></i>
                                </a>
                            </div>
                             <div className="project_card" onMouseOut={()=>setshowProjects(2)}  onMouseOver={()=>setshowProjects(2)}>
                                <div className="project_title">
                                    <span>Technology</span>
                                    <h6>Project management system</h6>
                                </div> 
                                <a href="/pms">
                                    view project
                                    <i className="lni lni-arrow-top-right"></i>
                                </a>
                            </div>
                             <div className="project_card" onMouseOut={()=>setshowProjects(3)}  onMouseOver={()=>setshowProjects(3)} >
                                <div className="project_title">
                                    <span>e-cormmerce</span>
                                    <h6>Online Coffee shop</h6>
                                </div> 
                                <a href="/coffee">
                                    view project
                                    <i className="lni lni-arrow-top-right"></i>
                                </a>
                            </div>
                             <div className="project_card" onMouseOut={()=>setshowProjects(4)}  onMouseOver={()=>setshowProjects(4)}>
                                <div className="project_title">
                                    <span>Personal</span>
                                    <h6>Personal Portfolio site </h6>
                                </div> 
                                <a href="/portfolio">
                                    view project
                                    <i className="lni lni-arrow-top-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    

                </div>
            
                
        </div>

 

      </>
  )
}

export default Project