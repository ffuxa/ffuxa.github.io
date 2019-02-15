import React, {Component} from 'react';
import './CastingCallNumeroDos.css';

/*
 * This section is used for the DVD symbol
 */

(function ($, window, undefined) {
	$.fn.marqueeify = function (options) {
		var settings = $.extend({
			horizontal: true,
			vertical: true,
			speed: 50, // In pixels per second
			container: $(this).parent(),
			bumpEdge: function () {}
		}, options);
		
		return this.each(function () {
			var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
				$el = $(this);

			getSizes = function () {
				containerWidth = settings.container.outerWidth();
				containerHeight = settings.container.outerHeight();
				elWidth = $el.outerWidth();
				elHeight = $el.outerHeight();
			};

			move = {
				right: function () {
					$el.animate({left: (containerWidth - elWidth)}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.left();
					}});
				},
				left: function () {
					$el.animate({left: 0}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.right();
					}});
				},
				down: function () {
					$el.animate({top: (containerHeight - elHeight)}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.up();
					}});
				},
				up: function () {
					$el.animate({top: 0}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.down();
					}});
				}
			};

			getSizes();

			if (settings.horizontal) {
				move.right();
			}
			if (settings.vertical) {
				move.down();
			}

      // Make that shit responsive!
      $(window).resize( function() {
        getSizes();
      });
		});
	};
})(jQuery, window);

$(document).ready( function() {

	$('.marquee').marqueeify({
		speed: 100,
		bumpEdge: function () {
			var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
			$('.marquee .logo').css('fill', newColor);
		}
	});
});

/*
 * Actual component code
 */

class CastingCallNumeroDos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sounds: [
        'bass', 'bongos', 'congas', 'keyboard', 'sax', 'timbales', 'trombone', 'trumpet', 'guiro',
      ],
    };
  }

  componentDidMount() {
    console.log("If you can see this I'm gonna assune you're a HACKERMAN!");
    console.log("(also pls don't look through the src code, this was hacked together so it's garbage lol");
    // YOU LOOKED THROUGH THE SOURCE CODE! I TOLD YOU NOT TO! 😭
  }

  onSearchSubmit(e) {
    e.preventDefault();
    alert('did you actually think I\'d go through the trouble of coding search functionality for a casting call? Was an entire webpage not enough? smh');
  }

  playOrPauseSound(name) {
    const audio = document.getElementById(name);

    if (audio.duration > 0 && !audio.paused) {
      audio.pause();
    } else {
      // Pause all playing sounds first
      for (let instID of this.state.sounds) {
        if (name !== instID) {
          const inst = document.getElementById(instID);

          if (inst.duration > 0 && !inst.paused) {
            inst.pause();
          }
        }
      }

      audio.play();
    }
  }

  render() {
    return (
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="http://www.organicspices.com/" target="_blank">Spicy Inc.</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#welcome-container">Welcome <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#song-info-container">Song Info</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#instruments-container">Instruments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.google.com/search?q=smartest+most+attractive+coolest+definitely+super+chill+doesn%27t+do+drugs+and+stuf+just+a+guy+you+can+have+a+beer+with+and+will+definitely+take+care+of+your+bird+for+you+while+you%27re+in+Honduras+man+in+the+world&oq=smartest+most+attractive+coolest+definitely+super+chill+doesn%27t+do+drugs+and+stuf+just+a+guy+you+can+have+a+beer+with+and+will+definitely+take+care+of+your+bird+for+you+while+you%27re+in+Honduras+man+in+the+world" target="_blank">About Me</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={this.onSearchSubmit}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        {/* Welcome */}
        <div id="welcome-container" className="section">
          <h1 id="welcome-text">
            <span style={{color: "#FF0000"}}>W</span>
            <span style={{color: "#FF7F00"}}>e</span>
            <span style={{color: "#FFFF00"}}>l</span>
            <span style={{color: "#00FF00"}}>c</span>
            <span style={{color: "#0000FF"}}>o</span>
            <span style={{color: "#8B00FF"}}>m</span>
            <span style={{color: "#FF0000"}}>e</span>
          </h1>
          <small className="center" style={{fontSize: "3px"}}>This was supposed to spin in the middle...</small>
        </div>

        {/* Song Info */}
        <div id="song-info-container" className="section">
          <a style={{fontSize: "9px", float: "left"}} href="https://www.youtube.com/watch?v=sCNrK-n68CM" target="_blank">Click me!</a>
          <h1 className="center-ease-in">Song Info</h1>
          <br/><br/>

          <p>Hi folks! It's ya boi, Fabian.</p>
          <p>So I wrote a <em><strong>song</strong></em>. It's latin. Like this guy.</p>

          {/* <img src={require('./../../images/latinactor1.jpeg')} alt=""/> */}
          <img height="200" width="200" src={require('./images/latinactor2.jpg')} alt="" />

          <br/><br/>
          <p>Or this dude</p>
          <img height="200" width="200" src={require('./images/badbunny.jpg')} alt="" />
          <br/>
          <small style={{fontSize: "8px"}}>Btw <a href="https://open.spotify.com/album/7CjJb2mikwAWA1V6kewFBF" target="_blank">bad bunny's new album</a> is 🔥</small>
          <br/><br/>
          <p>It's based on <a href="https://www.youtube.com/watch?v=Ns9YYSqLxyI&index=1&list=RDQMc74ayv-iMFM" target="_blank">this</a> song by one of Puerto Rico's greatest exports, Marc Anthony.</p>

          <br/>
          <p>Basically, its split into: </p>
          <ul>
            <li>Regular intro/chorus of the song</li>
            <li>Solos!</li>
            <li>Sexy fun outro</li>
          </ul>

          <br/>
          <p>Each part in itself isn't very complicated (except maybe piano?) but together it makes a SEXY. ASS. BEAT. YO.</p>
          <small>Plus this also means anyone's welcome to sign up!</small>

          <br/>
          <br/>
          <p>The song on noteflight contains the basic boilerplate of the song, but I expect us to modify it and play around with it as we go along</p>
          <p>Also, expect to improvise! Again, the written part is just boilerplate and a bit repetitive at times, so I expect us all to improvise and feel the rhythm as we play it. Should make it really fun and groovy that way!</p>
          <br/>
          <br/>

          <p>Btw I plan on playing one of the instruments below but I'm not sure which one... probably congas unless there's a large demand for that or something. Idk</p>
          <br/>
          <br/>

          <p><strong><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Here's the link to the noteflight in case you're interested in hearing it!</a></strong></p>
        </div>

        {/* Instruments */}
        <div id="instruments-container" className="section">
          <h1 className="center-ease-in">Instruments</h1>
          <div className="container" style={{paddingTop: "20px"}}>
            <div className="row">
              <div className="col-sm center2" onClick={() => this.playOrPauseSound('sax')}>
                <img height="100" width="100" src={require('./images/sax.jpg')} alt=""></img>
                <p>(<a href="https://google.com/search?q=boobies+and+sexy+time+pls" target="_blank">Sex</a>)ophone</p>
              </div>
              <div className="col-sm center2" onClick={() => this.playOrPauseSound('congas')}>
                <img height="100" width="100" src={require('./images/congas.jpg')} alt=""></img>
                <p>Congas</p>
              </div>
              <div className="col-sm center2" onClick={() => this.playOrPauseSound('bongos')}>
                <img height="100" width="100" src={require('./images/bongos.jpg')} alt="" style={{marginRight: "5px"}}></img>
                <img height="100" width="100" src={require('./images/cowbell.jpg')} alt=""></img>
                <p>Bongos/Cowbell</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm center2" onClick={() => this.playOrPauseSound('guiro')}>
                <img height="100" width="100" src={require('./images/guiro.jpg')} alt=""></img>
                <p>Guiro</p>
              </div>
              <div className="col-sm center2" onClick={() => this.playOrPauseSound('bass')}>
                <img height="100" width="100" src={require('./images/bass.jpg')} alt=""></img>
                <p>Bass</p>
              </div>
              <div className="col-sm center2" onClick={() => this.playOrPauseSound('keyboard')}>
                <img height="100" width="100" src={require('./images/keyboard.jpg')} alt=""></img>
                <p>Keyboard</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm center2" onClick={() => this.playOrPauseSound('timbales')}>
                <img height="100" width="100" src={require('./images/timbales.jpg')} alt=""></img>
                <p>Timbales</p>
              </div>
              <div className="col-sm center2" onClick={() => this.playOrPauseSound('trombone')}>
                <img height="100" width="100" src={require('./images/trombone.jpg')} alt=""></img>
                <p>Trombone</p>
              </div>
              <div className="col-sm center2" onClick={() => this.playOrPauseSound('trumpet')}>
                <img height="100" width="100" src={require('./images/trumpet.jpg')} alt=""></img>
                <p>Trumpet</p>
              </div>
            </div>
          </div>
        </div>

        {/* DVD symbol */}
        <div className="marquee">
          <svg width="153px" height="69px"><g><path className="logo" d="M140.186,63.52h-1.695l-0.692,5.236h-0.847l0.77-5.236h-1.693l0.076-0.694h4.158L140.186,63.52L140.186,63.52z M146.346,68.756h-0.848v-4.545l0,0l-2.389,4.545l-1-4.545l0,0l-1.462,4.545h-0.771l1.924-5.931h0.695l0.924,4.006l2.078-4.006 h0.848V68.756L146.346,68.756z M126.027,0.063H95.352c0,0-8.129,9.592-9.654,11.434c-8.064,9.715-9.523,12.32-9.779,13.02 c0.063-0.699-0.256-3.304-3.686-13.148C71.282,8.7,68.359,0.062,68.359,0.062H57.881V0L32.35,0.063H13.169l-1.97,8.131 l14.543,0.062h3.365c9.336,0,15.055,3.747,13.467,10.354c-1.717,7.24-9.91,10.416-18.545,10.416h-3.24l4.191-17.783H10.502 L4.34,37.219h20.578c15.432,0,30.168-8.13,32.709-18.608c0.508-1.906,0.443-6.67-0.764-9.527c0-0.127-0.063-0.191-0.127-0.444 c-0.064-0.063-0.127-0.509,0.127-0.571c0.128-0.062,0.383,0.189,0.445,0.254c0.127,0.317,0.19,0.57,0.19,0.57l13.083,36.965 l33.344-37.6h14.1h3.365c9.337,0,15.055,3.747,13.528,10.354c-1.778,7.24-9.972,10.416-18.608,10.416h-3.238l4.191-17.783h-14.481 l-6.159,25.976h20.576c15.434,0,30.232-8.13,32.709-18.608C152.449,8.193,141.523,0.063,126.027,0.063L126.027,0.063z M71.091,45.981c-39.123,0-70.816,4.512-70.816,10.035c0,5.59,31.693,10.034,70.816,10.034c39.121,0,70.877-4.444,70.877-10.034 C141.968,50.493,110.212,45.981,71.091,45.981L71.091,45.981z M68.55,59.573c-8.956,0-16.196-1.523-16.196-3.365 c0-1.84,7.239-3.303,16.196-3.303c8.955,0,16.195,1.463,16.195,3.303C84.745,58.05,77.505,59.573,68.55,59.573L68.55,59.573z"/></g></svg>
        </div>

        {/* Audios */}
        {
          this.state.sounds.map((inst, index) => {
            return <audio id={inst} key={index}><source src={require("./audio/" + inst + ".mp3")} type="audio/mp3"/></audio>
            // return <audio id={inst} src={require("./audio/" + inst + ".mp3")}/>
          })
        }

        {/* <audio controls>
          <source src={require("./audio/bongos.mp3")} type="audio/mp3"/>
          oops
        </audio> */}
      </div>
    );
  }
}

export default CastingCallNumeroDos;
