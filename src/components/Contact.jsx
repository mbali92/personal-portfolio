import React from 'react'

function Contact() {
  return (
      <>
          <div className="contact-section" id="contact-section">
              <div className="section_container">
                  <div className="page_row contact_row">
                      <div className="contact_title section_header content_col_left">
                          <h1>Please Get in Touch </h1>
                      </div>
                      <div className="content_col_right">
                          <p className='page_paragraph'>
                              Thank you for reviewing my portfolio. I hope you are encouraged by my work and look forward
                              to the possibility of us combining our skills to create a great team. Please feel free to contact me regarding any
                              upcoming projects you would like to collaborate on.
                          </p>
                      </div>
                  </div>
                  <div className="contact_details contact_row page_row">
                      <div className="contact_details_col">
                          <div className="contact_details_text">
                              <i className="lni lni-envelope"></i>
                              <p>
                                  <span>Email</span>
                                  <span>mkhwanazimba@gmail.com</span>
                              </p>
                          </div>
                      </div>
                      <div className="contact_details_col">
                          <div className="contact_details_text">
                              <i className="lni lni-phone"></i>
                              <p>
                                  <span>Phone</span> 
                                  <span>+2781 2061 451</span>
                              </p>
                          </div>
                      </div>
                      <div className="contact_details_col">
                          <div className="contact_details_text">
                              <i className="lni lni-linkedin"></i>
                              <p>
                                  <span>Linkedin</span>
                                  <span><a href="">My linkedin in profile</a></span>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Contact