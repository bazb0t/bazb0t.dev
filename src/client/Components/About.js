import React from 'react';
import 'scss/main.scss';
import { MiaBaz } from 'assets/assetsManifest';

import DI from './DI';

function timeAdjust() {
  let year = new Date().getFullYear();
  if (year < 2020) {
    return 'Earlier this year, ';
  } else if (year === 2020) {
    return 'Last year, ';
  } else if (year > 2020) {
    return 'In 2019, ';
  }
}

function About() {
  return (
    <>
    <div className='comcon'>
      <h1>About Me</h1>
        <center><h3>Hi! I'm Baz.</h3></center>
      <div className='about-content'>
        <img
          src={MiaBaz}
          className='about__headshot'
          alt='headshot of Mia Andor Baz'
        />
        <div className='about__text'>
          <p>
            I'm a full-stack software engineer (/web developer/programmer/code whisperer/...)
            based in New York City. {timeAdjust()} I attended Fullstack Academy
            of Code as a recipient of the NYC Tech Talent Pipeline's Web
            Development Fellowship, completing their Software Engineering
            Immersive program. My passion for creativity and for meaningful and
            transformative connections first led me to music, and in college I
            built a few simple websites for fun -- but I never thought I'd swap
            my career for my hobby, or find it so rewarding! Programming gives
            me the same opportunities through a different medium, and I couldn't
            love it more. As a full-stack developer, I speak JavaScript, use a
            PERN (PostgreSQL, Express, React, Node) stack, and am always eager
            to learn anything and everything. The web is my oyster!
          </p>
          <p>
            While there's so, <em>so</em> much more I plan to do with this site,
            it was important to me that as I learn new skills, I can demo them
            as new features! In the meantime, please click the navbar buttons to
            access my Github, LinkedIn, and resume, and check back soon!
          </p>
          <ul>
            <li>
              <b>Proficient</b>: JavaScript, HTML, CSS, React, Redux, Axios,
              Express, Node, Sequelize, PostgreSQL{' '}
            </li>
            <li>
              <b>Familiar</b>: Passport.js, React Hooks, Socket.io, OpenTok,
              Bulma, Bootstrap
            </li>
            <li>
              <b>Tools</b>: Git, GitHub, Heroku, Travis, Mocha, Chai, Jasmine,
              Visual Studio Code, Trello
            </li>
          </ul>
        </div>
    </div>
    </div>
    <div>
<DI />      
    </div>
    </>
  );
}

export default About;
