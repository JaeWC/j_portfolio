import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="work">
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
      </section>
    );
  }
}
