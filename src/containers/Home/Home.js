import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="https://ffuxa.github.io">Fabian Fuxa</a>
        <button
          className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </nav>


      {/* <!--Intro
      –––––––––––––––––––––––––––––––––––––––––––––––––– --> */}
      <div id="intro">
        <img id="profile-img" src={require('./images/profile.jpg')} alt="" />
        <br />

        <h1>Fabian Fuxa</h1>
        <p className="lead">
          Aspiring software developer, striving to create elegant solutions to complicated problems
        </p>

        <a
          href="https://www.linkedin.com/in/fabian-fuxa-215910b8/"
          rel="noopener noreferrer" target="_blank" data-toggle="tooltip"
          data-placement="center" title="linkedin.com/in/fabianfuxa/"
        >
          <i className="fa fa-linkedin fa-lg icon-margin icon" />
        </a>

        <a
          href="mailto:ffuxa@umich.edu" rel="noopener noreferrer" target="_blank"
          data-toggle="tooltip" data-placement="center" title="ffuxa@umich.edu"
        >
          <i className="fa fa-envelope fa-lg icon-margin icon" />
        </a>

        <a
          href="https://github.com/ffuxa" rel="noopener noreferrer" target="_blank"
          data-toggle="tooltip" data-placement="center" title="github.com/ffuxa"
        >
          <i className="fa fa-github-alt fa-lg icon-margin icon" />
        </a>

        <a
          href={require('./resume/Resume_Fabian_Fuxa.pdf')} download="Fabian_Fuxa_Resume.pdf"
          role="button" data-toggle="tooltip" data-placement="center" title="Resume"
        >
          <i className="fa fa-file-text fa-lg icon-margin icon" />
        </a>
      </div>


      {/* <!--About
      –––––––––––––––––––––––––––––––––––––––––––––––––– --> */}
      <div id="about">
        <div className="container">
          <h2 id="about-me-header">About Me</h2>

          <br />
          <p className="center-text">
            <em>
              “Life is nothing more than the happiness that you get out of it” - Jean Anouilh
            </em>
          </p>
          <br />

          <p className="center-text">Hi! Welcome to my page. </p>
          <p className="center-text">
            I am a student at the University of Michigan studying Computer Science Engineering,
            and I like to code I guess
          </p>
          <br />

          <b>Life goals:</b>
          <ul>
            <li>Get a job</li>
            <li>Travel</li>
            <li>Make some money</li>
            <li>Retire and live as a wise old man in the beaches of Puerto Rico</li>
          </ul>
          <br />

          <b>Interests:</b>
          <ul>
            <li>Mobile and web development</li>
            <li>Backend systems architecture</li>
            <li>Accessible software design</li>
            <li>Playing drums/guitar/any instrument I can get my hands on</li>
            <li>Cooking</li>
          </ul>
          <br />

          <b>Past Coursework:</b>
          <ul>
            <li>EECS 591: Distributed Systems</li>
            <li>EECS 495: Accessible Software Systems Design</li>
            <li>EECS 493: Artificial Intelligence</li>
            <li>EECS 492: User Interfaces</li>
            <li>EECS 482: Operating Systems</li>
            <li>EECS 388: Computer Security</li>
          </ul>

          <br />
          <b>Programing Skills</b>
          <br />
          <br />

          <div className="container">
            <div className="row">
              <div className="col-sm">
                <img
                  src={require('./images/python.png')}
                  className="img-responsive inline-block list-item-image" alt=""
                />
              </div>
              <div className="col-sm">
                <img
                  src={require('./images/cpp.png')}
                  className="img-responsive inline-block list-item-image" alt=""
                />
              </div>
              <div className="col-sm">
                <img
                  src={require('./images/html_css.png')}
                  className="img-responsive inline-block list-item-image" alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <img
                  src={require('./images/js.png')}
                  className="img-responsive inline-block list-item-image" alt=""
                />
              </div>
              <div className="col-sm">
                <img
                  src={require('./images/sql.png')}
                  className="img-responsive inline-block list-item-image" alt=""
                />
              </div>
              <div className="col-sm">
                <img
                  src={require('./images/Android_Robot_100.png')}
                  className="img-responsive inline-block list-item-image" alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <img
                  src={require('./images/swift.png')}
                  className="img-responsive inline-block list-item-image" alt=""
                />
              </div>
              <div className="col-sm">
                <img
                  src={require('./images/react.png')}
                  className="img-responsive inline-block list-item-image" alt=""
                />
              </div>
              <div className="col-sm">
                <img
                  src={require('./images/django-logo.png')}
                  className="img-responsive inline-block list-item-image" alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <!--Projects
      –––––––––––––––––––––––––––––––––––––––––––––––––– --> */}
      <div id="projects">
        <div className="container">
          <br />
          <h2 className="center-text">Projects</h2>
          <br />

          <div id="project-images">
            <a className="project-image-link" href="https://ffuxa.github.io">
              <img src={require('./images/profile.jpg')} alt="ffuxa.github.io" className="project-image" />
              <div className="project-image-middle">
                <div className="project-image-middle-text">ffuxa.github.io</div>
              </div>
            </a>
            <a className="project-image-link" href="https://ffuxa.github.io/sudoku">
              <img src={require('./images/sudoku.png')} alt="sudoku" className="project-image" />
              <div className="project-image-middle">
                <div className="project-image-middle-text">Sudoku Solver</div>
              </div>
            </a>
          </div>

          <br />
        </div>
      </div>


      {/* <!-- Resume
      –––––––––––––––––––––––––––––––––––––––––––––––––– --> */}
      <div id="resume">
        <div className="container">
          <h2 className="center-text">Resume</h2>

          <br />
          <a href={require('./resume/Resume_Fabian_Fuxa.pdf')} download="Fabian_Fuxa_Resume.pdf" role="button">
            <img id="resumeJPG" src={require('./images/resume.png')} alt="" />
          </a>
          <br />
          <br />
        </div>
      </div>


      {/* <!-- Footer
      –––––––––––––––––––––––––––––––––––––––––––––––––– --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/fabian-fuxa-215910b8/"
                 rel="noopener noreferrer" target="_blank">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                 href="mailto:ffuxa@umich.edu" rel="noopener noreferrer" target="_blank">Email</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                 href="https://github.com/ffuxa" rel="noopener noreferrer" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Home;
