import React from 'react';
import './SoulSacrificeCastingCall.css';

function SoulSacrificeCastingCall() {
  return (
    <div id="casting-call-container">
      <h1 id="casting-call-title-top">ITS ANOTHER CASTING CALL FOLKS</h1>
      <br />
      <div id="casting-call-casting-info">
        <h4 id="casting-call-brought-by">
          { "And this time it's brought by your favorite Puerto Rican, after Ricky Martin, JLo, Daddy Yankee, that one baseball player and Justin Bieber in Despacito." }
        </h4>
        <br />
        <br />
        <h3 id="casting-call-one">
          {' Do you wish your life had more latin spice? Are you groooooovyyyyyy? Do you want to solo, rock, pop, lock, \
             shock, and bob your head till you have to get it replaced? '}
        </h3>
        <br />
        <h1 id="casting-call-oh-boy">
          WELL OH BOY DO I HAVE THE SONG FOR YOU.
        </h1>
        <br />
        <h3 id="casting-call-two">
          {' I\'m cooking up a new spicy tune that will be covering the one and only Soul Sacrifice - Live at Woodstock \
             song rendition by Santana ('}
          <a href="https://www.youtube.com/watch?v=AqZceAQSJvc">see here</a>
          {' to get your mind blown). '}
        </h3>
        <br />
        <h3 id="casting-call-three">
          {'It\'s gonna be a 5 - 6 min soul filled pouch of McDonald\'s Szechuan Sauce that will explode all over \
             the stage in a beautiful coordinated performance of music and talent. Also, it\'ll be dope. '}
        </h3>
        <br />
        <h3 id="casting-call-four">
          {'If you\'re interested,'}
          <a href="https://www.noteflight.com/scores/view/b627d52ab351d29a5044ef55ebbeb175e740bbef">
            {' here\'s the noteflight '}
          </a>.
          {'It\'s missing the drum solo, entire keyboard part (recent addition), and ending, but it\'s at least 60% done at this point.'}
        </h3>
        <br />
        <h3 id="casting-call-five">
          { 'All instruments will play a dope solo, and if you\'re not playing a solo, you\'ll be jamming along to the beat. ' +
            'It\'s pretty structured right now, but I\'m trying to add a little more variation to the non-solo parts to' +
             'keep it fresh. Stay tuned for those.'}
        </h3>
        <br />
        <br />
        <br />
        <h2 id="casting-call-what-i-need">
          {'HERE\'S WHAT I NEED'}
        </h2>
        <br />
        <br />
        <br />
      </div>
      <div>
        <h3 id="casting-call-instruments">INSTRUMENTS</h3>
        <ul>
          <li className="casting-call-inst">
                Congas - Fabian
          </li>
          <li className="casting-call-inst">
                Bongos - ????
          </li>
          <li className="casting-call-inst">
                Drumset - Hoffa
          </li>
          <li className="casting-call-inst">
                Electric Guitar - ????
          </li>
          <li className="casting-call-inst">
                Electric Bass - ????
          </li>
          <li className="casting-call-inst">
                Keyboard - ????
          </li>
        </ul>
      </div>
      <div>
        <h3 id="casting-call-qa-title">
          Q&A
        </h3>
        <h4 className="casting-call-question">
          Did you really just make a website and hosted it just to send out a casting call?
        </h4>
        <p className="casting-call-answer">
          Yes.
        </p>
        <h4 className="casting-call-question">
          ... was it worth it?
        </h4>
        <p className="casting-call-answer">
          No.
        </p>
        <h4 className="casting-call-question">
          {'Did you realize this halfway through making the website but it was too late to turn back?'}
        </h4>
        <p className="casting-call-answer">
          SHUT UP MOM
        </p>
        <h4 className="casting-call-question">
          Ok on to like, real questions. How cool is this song?
        </h4>
        <p className="casting-call-answer">
          {'As cool as Ben Levine\'s beard'}
        </p>
        <h4 className="casting-call-question">
          Is it like, technically challenging?
        </h4>
        <p className="casting-call-answer">
          {'Most parts should be pretty easy and repetitive. Santana is very known for the way they repeat rhythms, then ' +
          'split off into individual solos for each instrument. So as long as you\'re not soloing, you\'ll just be' +
          '~~g r o o v i n~~'}
        </p>
        <h4 className="casting-call-question">
          What should I expect?
        </h4>
        <p className="casting-call-answer">
          {'So basically, it\'ll be a more or less 5-7 minute song that will be very similar to the Woodstock version of' +
          'the song ('}
          <a href="https://www.youtube.com/watch?v=AqZceAQSJvc">
            see here
          </a>
          {') with the solo\'s rewritten and shortened (so that it doesn\'t last like 10 minutes). I' +
           'want to practice and finish these early in the semester so that we can not be hella stressed out during' +
           'hell weeks.'}
        </p>
        <h4 className="casting-call-question">
          Do you need help with anything?
        </h4>
        <p className="casting-call-answer">
          {'Yes! I suck at stage movement, choosing costumes, and stuff like that. Also, I am very inexperienced in writing ' +
           'elestric guitar solos so if you listen to the song on Noteflight and have suggestions, shoot em my way.' +
           'If you have any ideas, please let me know, even if you aren\'t planning on being in the song! '}
        </p>
          hello darkness, my old friend
      </div>
    </div>
  );
}

export default SoulSacrificeCastingCall;
