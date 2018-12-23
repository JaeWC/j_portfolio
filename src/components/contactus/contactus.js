import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <h2>CONTACT</h2>
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                <i className="fa fa-map-marker" /> : {resumeData.address_1}
              </h4>
              <h4>
                <i className="fa fa-phone" /> : {resumeData.phoneNumber}
              </h4>
              <h4>
                <i className="fa fa-envelope" /> : {resumeData.email}
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
