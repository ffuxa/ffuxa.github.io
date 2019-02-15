import React, { Component } from 'react';
import { throws } from 'assert';
import './CastingNumeroDos.css';

class CastingNumeroDos extends Component {
  constructor() {
    super();

    this.state = {
      casting: [
        {
          "instrument": "Bongos/Cowbell", 
          "person": "here", 
          "image": "bongos"
        },
        {
          "instrument": "Congas", 
          "person": "here", 
          "image": "congas"
        },
        {
          "instrument": "Saxophone", 
          "person": "here", 
          "image": "bongos"
        },
        {
          "instrument": "Keyboard", 
          "person": "here", 
          "image": "keyboard"
        },
        {
          "instrument": "Trombone",
          "person": "here",
          "image": "trombone"
        },
        {
          "instrument": "Timbales", 
          "person": "here", 
          "image": "timbales"
        },
        {
          "instrument": "Guiro", 
          "person": "here", 
          "image": "guiro"
        },
        {
          "instrument": "Trumpet", 
          "person": "here", 
          "image": "trumpet"
        },
        {
          "instrument": "Bass", 
          "person": "here", 
          "image": "bass"
        },
      ],
      current: -1,
    };

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  componentDidMount() {
    console.log("hi there fellow CS student 👋");
  }

  nextImage() {
    this.setState((state, props) => {
      return {current: state.current + 1}
    });
  }

  prevImage() {    
    this.setState((state, props) => {
      return {current: state.current - 1}
    });
  }

  render() {
    return (
      <div>
        {this.state.current === -1 &&
          <div id="casting2-container">
            <p className="text spice-casting-title"><em>Spice</em> Casting!</p>
            <p className="text spice-casting-title">🎉</p>
            <a className="next" onClick={this.nextImage}>&#10095;</a>
          </div>
        }
        {this.state.current < this.state.casting.length && this.state.current >= 0 &&
          <div id="casting2-container">
            <div className="row">
              <img className="col-sm center-img" height="200" width="200" src={require('./images/' + this.state.casting[this.state.current].image + '.jpg')}/>
              <img className="col-sm center-img" height="200" width="200" src={require('./images/' + this.state.casting[this.state.current].image + '.jpg')}/>
            </div>

            <p className="text">{this.state.casting[this.state.current].person}</p>
            <p className="text">{this.state.casting[this.state.current].instrument}</p>

            <a className="prev" onClick={this.prevImage}>&#10094;</a>
            <a className="next" onClick={this.nextImage}>&#10095;</a>
          </div>
        }
        {this.state.current >= this.state.casting.length &&
          <div id="casting2-container">
            <h1 style={{color: "white", fontSize: "40px", textAlign: "center"}}>Results</h1>
            <div className="container" style={{paddingTop: "20px"}}>
              <div className="row">
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/bongos.jpg')} alt=""></img>
                  <p>Saxophone</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/congas.jpg')} alt=""></img>
                  <p>Congas</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/bongos.jpg')} alt="" style={{marginRight: "5px"}}></img>
                  <img height="100" width="100" src={require('./images/cowbell.jpg')} alt=""></img>
                  <p>Bongos/Cowbell</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/congas.jpg')} alt=""></img>
                  <p>Congas</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/bass.jpg')} alt=""></img>
                  <p>Bass</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/keyboard.jpg')} alt=""></img>
                  <p>Keyboard</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/timbales.jpg')} alt=""></img>
                  <p>Timbales</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/trombone.jpg')} alt=""></img>
                  <p>Trombone</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/trumpet.jpg')} alt=""></img>
                  <p>Trumpet</p>
                </div>
              </div>
            </div>

            <a className="prev" onClick={this.prevImage}>&#10094;</a>
          </div>
        }
      </div>
    )
  }
}

export default CastingNumeroDos;