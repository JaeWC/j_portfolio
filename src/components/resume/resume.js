import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="devstack">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work </span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.companyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.from} - {item.to}
                        </em>
                      </p>
                      <p>
                        {item.Achievements.map(detail => (
                          <span>
                            {detail} <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Project History </span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.project &&
              resumeData.project.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.title}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.from} - {item.to}
                        </em>
                      </p>
                      <p>
                        {item.Achievements.map(detail => (
                          <span>
                            {detail} <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col skills">
            <ul>
              {resumeData.skills &&
                resumeData.skills.map((item, idx) => {
                  return <li key={idx}>{item}</li>;
                })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
