import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="project">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            {/* portfolio-wrapper */}
            <div
              id="project-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map(item => {
                  return (
                    <div className="columns project-item" key={item.id}>
                      <div className="item-wrap">
                        <a href={`#modal-${item.id}`} title="true">
                          <img
                            alt=""
                            src={`${item.thumbnail_img}`}
                            className="item-img"
                          />
                          <div className="overlay">
                            <div className="project-item-meta">
                              <h5>{item.name}</h5>

                              <p>{item.description1}</p>
                              <p>{item.description2}</p>
                            </div>
                          </div>
                          <div className="link-icon">
                            <i className="icon-plus" />
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Modal Popup */}
            {resumeData.portfolio.map(item => {
              return (
                <div
                  id={`modal-${item.id}`}
                  className="popup-modal mfp-hide"
                  key={item.id}
                >
                  <img
                    className="scale-with-grid"
                    src={`${item.detail_img}`}
                    alt=""
                  />
                  <div className="description-box">
                    <h2>{item.name}</h2>
                    <h4>{item.service}</h4>
                    <p>
                      <strong>Front-end : </strong>
                      {item.front_end}
                      <br />
                      <strong>Back-end : </strong>
                      {item.back_end}
                    </p>
                    <p>
                      {item.works.map((item, idx) => (
                        <span key={idx}>
                          {' ✓ '}
                          {item} <br />{' '}
                        </span>
                      ))}
                    </p>
                    <span className="categories">
                      <i className="fa fa-tag" />
                      {item.tags.map((tag, index) =>
                        index === item.tags.length - 1 ? tag : `${tag}, `
                      )}
                    </span>
                  </div>
                  <div className="link-box">
                    <a href={item.video}>Introduction</a>
                    <a className="popup-modal-dismiss">Close</a>
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
