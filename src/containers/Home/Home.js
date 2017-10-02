import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">Fabian Fuxa</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#resume">Resume</a></li>
            </ul>
          </div>
        </div>
      </nav>


      {/* <!--Intro
      –––––––––––––––––––––––––––––––––––––––––––––––––– --> */}
      <div id="intro">
        <div className="container">
          <img className="img" src={require('./images/profile.jpg')} alt="" />
          <h1>Fabian Fuxa</h1>
          <p className="lead">Aspiring full stack web developer, striving to create elegant solutions to complicated problems</p>

          <a href="https://www.linkedin.com/in/fabian-fuxa-215910b8/" rel="noopener noreferrer" target="_blank" data-toggle="tooltip" data-placement="center" title="linkedin.com/in/fabianfuxa/">
            <i className="fa fa-linkedin fa-lg icon-margin icon" />
          </a>

          <a href="mailto:ffuxa@umich.edu" rel="noopener noreferrer" target="_blank" data-toggle="tooltip" data-placement="center" title="ffuxa@umich.edu">
            <i className="fa fa-envelope fa-lg icon-margin icon" />
          </a>

          <a href="https://github.com/ffuxa" rel="noopener noreferrer" target="_blank" data-toggle="tooltip" data-placement="center" title="github.com/ffuxa">
            <i className="fa fa-github-alt fa-lg icon-margin icon" />
          </a>

          <a href={require('./resume/Resume_Fabian_Fuxa.pdf')} rel="noopener noreferrer" target="_blank" data-toggle="tooltip" data-placement="center" title="Resume">
            <i className="fa fa-file-text fa-lg icon-margin icon" />
          </a>
        </div>
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
          <p className="center-text">I am a student at the
            {'University of Michigan studying Computer Science Engineering, and I like to code I guess.'}
          </p>
          <br />

          <ul>
            <b>Life goals:</b>
            <ul>
              <li>Get a job as a full stack web developer</li>
              <li>Become a full stack web developer</li>
              <li>Make some money</li>
              <li>Retire and live as a wise old man in the beaches of Puerto Rico</li>
            </ul>

            <br />

            <b>Interests:</b>
            <ul>
              <li>Full Stack Development</li>
              <li>{'Hacking (unfortunately, not the type of "hacking" from the movies)'}</li>
              <li>Playing drums/guitar/any instrument I can get my hands on</li>
              <li>Cooking</li>
            </ul>

            <br />
            <b>Programing Skills</b>
            <br />
            <br />

            <div className="row">
              <div id="small-img" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 center">
                <ul>
                  <li className="list-item">
                    <img src={require('./images/python.png')} className="img-responsive inline-block list-item-image" alt="" />
                  </li>
                  <li className="list-item">
                    <img src={require('./images/cpp.png')} className="img-responsive inline-block list-item-image" alt="" />
                  </li>
                  <li className="list-item">
                    <img src={require('./images/html_css.png')} className="img-responsive inline-block list-item-image" alt="" />
                  </li>
                  <li className="list-item">
                    <img src={require('./images/js.png')} className="img-responsive inline-block list-item-image" alt="" />
                  </li>
                  <li className="list-item">
                    <img src={require('./images/sql.png')} className="img-responsive inline-block list-item-image" alt="" />
                  </li>
                  <li className="list-item">
                    <img src={require('./images/Android_Robot_100.png')} id="android-icon" className="img-responsive inline-block list-item-image" alt="" />
                  </li>
                  <li className="list-item">
                    <img src={require('./images/swift.png')} className="img-responsive inline-block list-item-image" alt="" />
                  </li>
                  <li className="list-item">
                    <img src={require('./images/react.png')} id="react-icon" className="img-responsive inline-block list-item-image" alt="" />
                  </li>
                  <li className="list-item">
                    <img src={require('./images/django-logo.png')} id="django-icon" className="img-responsive inline-block list-item-image" alt="" />
                  </li>
                </ul>
              </div>
            </div>

            <br />

          </ul>
        </div>
      </div>


      {/* <!--Projects
      –––––––––––––––––––––––––––––––––––––––––––––––––– --> */}
      <div id="projects">
        <div className="container">
          <h2 className="center-text">Projects</h2>

          <br />

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="hovereffect">
              <img className="img-responsive" src={require('./images/profile.jpg')} alt="" />
              <div className="overlay">
                <h2>ffuxa.github.io</h2>
                <a className="info" href="https://ffuxa.github.io">Personal website designed to display bio, contact info, and personal projects (this one!). Built on React.js</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Link to="/sudoku">
              <div className="hovereffect">
                <img className="img-responsive" src={require('./images/sudoku.png')} alt="" />
                <div className="overlay">
                  <h2>Sudoku Solver</h2>
                  <a className="info">High speed sudoku solver that solves any sudoku puzzle in seconds</a>
                </div>
              </div>
            </Link>
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
          <a href={require('./resume/Resume_Fabian_Fuxa.pdf')} target="_blank">
            <img id="resumeJPG" src={require('./images/resume.png')} alt="" />
          </a>
          <br />

          <br />
          <div id="download">
            <a className="btn btn-primary" href={require('./resume/Resume_Fabian_Fuxa.pdf')} download="resume" role="button">Download</a>
          </div>
          <br />

        </div>
      </div>


      {/* <!-- Footer
      –––––––––––––––––––––––––––––––––––––––––––––––––– --> */}
      <nav className="navbar navbar-default navbar-bottom">
        <div className="container">
          <ul className="nav navbar-nav">
            <li><a href="https://www.linkedin.com/in/fabian-fuxa-215910b8/" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
            <li><a href="mailto:ffuxa@umich.edu" rel="noopener noreferrer" target="_blank">Email</a></li>
            <li><a href="https://github.com/ffuxa" rel="noopener noreferrer" target="_blank">GitHub</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Home;
