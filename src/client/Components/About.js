import React from 'react';
import 'scss/bazb0t.scss';
import { cardback } from 'assets/assetsManifest';
import { MiaBaz } from 'assets/assetsManifest';

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
    <div className=''>
      <header>About Me</header>
      <h3>Hi! I'm Baz.</h3>
      <div className='component-content'>
        <img
          src={MiaBaz}
          className='component-content__img'
          alt='headshot of Mia Andor Baz'
        />
        <div className=''>
          <p>
            I'm a full-stack software engineer (/web developer/programmer/...)
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
        <h3>A Note on Identity</h3>
        <p>
          It's 2019, and as I am the master of my own domain -- literally -- I'd
          like to take this opportunity to share something about myself:
        </p>
        <center>
          <h4>
            <b>
              I am transgender-nonbinary, and my pronouns are they/them/theirs.
            </b>
          </h4>
        </center>
        <p>
          It's important to me that I put this out there early: for starters,
          there's a distinct lack of diversity in tech -- nonbinary folks are
          especially underrepresented, as one can easily assume by attempting to
          Google statistics on how many nonbinary people there are in the
          country, let alone in this industry.
        </p>
        <p>
          Further, I strive to be as open as I can be with my identity and lived
          experiences because that is a luxury not everyone like me can
          afford...yet. I've seen firsthand the effect my authenticity has in
          making this world a more inclusive and supportive place, and while
          it's going to be a long time coming, that future can only be secured
          by the work we do today.
        </p>

        <p>
          You can help! If you haven't seen it, this is the back of my business
          card:
        </p>
        <img
          src={cardback}
          alt='back of business card describing they/them/their(s) pronoun usage and tips to be inclusive'
          width='500px'
          className='feature-img'
        />
        <p>
          It bears repeating, so, look: you're going to slip up and use the
          wrong pronouns. Mistakes happen all the time. Just say whatever it was
          again with the right pronoun and move on -- I'm <em>way</em> more
          interested in what you were actually trying to say!
        </p>
      </div>
    </div>
  );
}

export default About;
