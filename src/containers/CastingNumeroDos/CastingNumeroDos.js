import React, { Component } from 'react';
import './CastingNumeroDos.css';

class CastingNumeroDos extends Component {
  constructor() {
    super();

    this.state = {
      casting: [
        {
          instrument: 'Bongos/Cowbell',
          person: 'Ashton',
          image: 'bongos',
          pimage: 'ashton',
        },
        {
          instrument: 'Congas',
          person: 'Fabian',
          image: 'congas',
          pimage: 'fabian',
        },
        {
          instrument: 'Saxophone',
          person: 'Sam',
          image: 'sax',
          pimage: 'sam',
        },
        {
          instrument: 'Keyboard',
          person: 'Jess',
          image: 'keyboard',
          pimage: 'jess',
        },
        {
          instrument: 'Trombone',
          person: 'Tanner',
          image: 'trombone',
          pimage: 'tanner',
        },
        {
          instrument: 'Timbales',
          person: 'Ryan',
          image: 'timbales',
          pimage: 'ryan',
        },
        {
          instrument: 'Guiro',
          person: 'Anjali',
          image: 'guiro',
          pimage: 'anjali',
        },
        {
          instrument: 'Trumpet',
          person: 'Kam',
          image: 'trumpet',
          pimage: 'kam',
        },
        {
          instrument: 'Bass',
          person: 'Manoj',
          image: 'bass',
          pimage: 'manoj',
        },
      ],
      current: -1,
    };

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  componentDidMount() {
    console.log('hi there fellow CS student 👋');
  }

  nextImage() {
    this.setState((state, props) => {
      return { current: state.current + 1 }
    });
  }

  prevImage() {
    this.setState((state, props) => {
      return { current: state.current - 1 };
    });
  }

  render() {
    return (
      <div>
        {this.state.current === -1 &&
          <div id="casting2-container" style={{ padding: '0 100px' }}>
            <p className="text spice-casting-title"><em>Spice</em> Casting!</p>
            <p className="text spice-casting-title">🎉</p>

            <br />
            <p className="text">
              Hi! Sorry this took so long... I 1) procrastinated a bunch and
              2) had a really tough time making a decision!
            </p>
            <br />
            <p className="text">
              I want to thank everyone for the overwhelming interest and support!
              I wish I could take everyone but alas... it shan't be possible</p>
            <br />
            <p className="text">
              Also some people reached out about writing their own parts and adding new parts to
              the song. Although I thought this could work at first, after giving it some
              thought I've decided to not add any new parts for the time being...
              if during practice it feels like we could add a few new instruments
              then I'll reconsider! But for now, the cast stays as is.
            </p>
            <br />
            <p className="text">
              Anyways... HERE THEY ARE! -----> (click the arrow pls)
            </p>
            <a className="next" onClick={this.nextImage}>&#10095;</a>
          </div>
        }
        {this.state.current < this.state.casting.length && this.state.current >= 0 &&
          <div id="casting2-container">
            <div className="row">
              <img className="center-img" height="150" width="150" style={{ marginLeft: '20%' }}
                   src={require(`./images/${this.state.casting[this.state.current].image}.jpg`)}
                   alt="" />
              <img className="center-img" height="150" width="150" style={{ marginLeft: '20%' }}
                   src={require(`./images/${this.state.casting[this.state.current].pimage}.jpg`)}
                   alt="" />
            </div>

            <h1 className="text">{this.state.casting[this.state.current].person}</h1>
            <h1 className="text">{this.state.casting[this.state.current].instrument}</h1>

            <a className="prev" onClick={this.prevImage}>&#10094;</a>
            <a className="next" onClick={this.nextImage}>&#10095;</a>
          </div>
        }
        {this.state.current >= this.state.casting.length &&
          <div id="casting2-container" className="last">
            <h1 style={{ color: 'white', fontSize: '40px', textAlign: 'center', paddingTop: '20px' }}>Results</h1>
            <div className="container">
              <div className="row">
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/sax.jpg')} alt="" style={{ marginRight: '5px' }} />
                  <img height="100" width="100" src={require('./images/sam.jpg')} alt="" />
                  <p>Saxophone</p>
                  <p>Sam</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/congas.jpg')} alt="" style={{ marginRight: '5px' }} />
                  <img height="100" width="100" src={require('./images/fabian.jpg')} alt="" />
                  <p>Congas</p>
                  <p>Fabian</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/bongos.jpg')} alt="" style={{ marginRight: '5px' }} />
                  <img height="100" width="100" src={require('./images/cowbell.jpg')} alt="" style={{ marginRight: '5px' }} />
                  <img height="100" width="100" src={require('./images/ashton.jpg')} alt="" />
                  <p>Bongos/Cowbell</p>
                  <p>Ashton</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/guiro.jpg')} alt="" style={{ marginRight: '5px' }} />
                  <img height="100" width="100" src={require('./images/anjali.jpg')} alt="" />
                  <p>Guiro</p>
                  <p>Anjali</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/bass.jpg')} alt="" style={{ marginRight: '5px' }} />
                  <img height="100" width="100" src={require('./images/manoj.jpg')} alt="" />
                  <p>Bass</p>
                  <p>Manoj</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/keyboard.jpg')} alt="" style={{ marginRight: '5px' }} />
                  <img height="100" width="100" src={require('./images/jess.jpg')} alt="" />
                  <p>Keyboard</p>
                  <p>Jess</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/timbales.jpg')} alt="" style={{ marginRight: '5px' }} />
                  <img height="100" width="100" src={require('./images/ryan.jpg')} alt="" />
                  <p>Timbales</p>
                  <p>Ryan</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/trombone.jpg')} alt="" style={{ marginRight: '5px' }} />
                  <img height="100" width="100" src={require('./images/tanner.jpg')} alt="" />
                  <p>Trombone</p>
                  <p>Tanner</p>
                </div>
                <div className="col-sm center-box-instrument">
                  <img height="100" width="100" src={require('./images/trumpet.jpg')} alt="" style={{ marginRight: '5px' }} />
                  <img height="100" width="100" src={require('./images/kam.jpg')} alt="" />
                  <p>Trumpet</p>
                  <p>Kam</p>
                </div>
              </div>
            </div>

            <a className="prev" onClick={this.prevImage}>&#10094;</a>
          </div>
        }
      </div>
    );
  }
}

export default CastingNumeroDos;