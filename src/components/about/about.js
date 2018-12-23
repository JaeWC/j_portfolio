import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/J_image.png" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>
                    {resumeData.address_1}
                    <br />
                    {resumeData.address_2}
                  </span>
                  <br />
                  <span>{resumeData.phoneNumber}</span>
                  <br />
                  <span>{resumeData.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href="assets/최재원_Resume.pdf"
                    download="최재원_resume.pdf"
                    className="button"
                  >
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
