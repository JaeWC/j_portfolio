import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#work">
                  Work
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#project">
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#devstack">
                  Devstack
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3>
                {resumeData.role}
                <p>
                  Let's{' '}
                  <a class="smoothscroll" href="#about">
                    start scrolling{' '}
                  </a>
                  and learn more{' '}
                  <a class="smoothscroll" href="#about">
                    about me.
                  </a>
                </p>
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
