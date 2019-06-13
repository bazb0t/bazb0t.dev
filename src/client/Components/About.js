import React from "react";
import "bootstrap/css/bootstrap.css";

function timeAdjust() {
  let year = new Date().getFullYear();
  if (year < 2020) {
    return "Earlier this year, ";
  } else if (year === 2020) {
    return "Last year, ";
  } else if (year > 2020) {
    return "In 2019, ";
  }
}

function About() {
  return (
    <div className="content-wrapper">
      <header>About Me</header>
      <h3>Hi! I'm Baz.</h3>
      <p>
        I'm a full-stack software engineer (/web developer/programmer/...) based
        in New York City. {timeAdjust()} I graduated Fullstack Academy of Code
        as a recipient of the NYC Tech Talent Pipeline's Web Development
        Fellowship. My passion for creativity and for meaningful and
        transformative connections first led me to music, and in college I built
        a few simple websites for fun -- but I never thought I'd swap my career
        for my hobby, or find it so rewarding! Programming gives me the same
        opportunities through a different medium, and I couldn't love it more.
        As a full-stack developer, I speak JavaScript, use a PERN (PostgreSQL,
        Express, React, Node) stack, and am always eager to learn anything and
        everything. The web is my oyster!
      </p>
      <li>
        <b>Proficient</b>: JavaScript, HTML, CSS, React, Redux, Axios, Express,
        Node, Sequelize, PostgreSQL{" "}
      </li>
      <li>
        <b>Familiar</b>: Passport.js, React Hooks, Socket.io, OpenTok, Bulma,
        Bootstrap
      </li>
      <li>
        <b>Tools</b>: Git, GitHub, Heroku, Travis, Mocha, Chai, Jasmine, Visual
        Studio Code, Trello
      </li>
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
        Google statistics on how many nonbinary people there are in the country,
        let alone in this industry.
      </p>
      <p>
        Further, there's safety in numbers, so I strive to be as open as I can
        be with my identity and lived experiences because that is a luxury not
        everyone like me can afford...yet. I've seen firsthand the effect my
        authenticity has in making this world a more inclusive and supportive
        place, and while it's going to be a long time coming, that future can
        only be secured by the work we do today.
      </p>
      <p>
        Practically speaking, it seems no matter where in the conversation I
        bring it up, it still seems to create some cognitive dissonance for my
        interlocutor...but in my experience, it's a lot <em>more</em> awkward if
        I bring it up after a mistake has been made. And, look: you're going to
        use the wrong pronouns sometimes. Mistakes happen all the time. Just say
        whatever it was again with the right pronoun and move on -- I'm{" "}
        <em>way</em> more interested in what you were actually trying to say!
      </p>
      <h3>Lookin' a little light here, Baz. What's up with that?</h3>
      <p>
        As an early-career engineer coming from the arts (we perform{" "}
        <em>after</em> it's all packaged up...you didn't pay to see a
        rehearsal!), I'm learning to get comfortable with the concept of Minimum
        Viable Product. While there's so, <em>so</em> much more I plan to do
        with this site, it was important to me that it:
        <li>says more than "Hello World"</li>
        <li>doesn't look like a readme (so, basic styling)</li>
        <li>
          is designed to be a playground for skills development - there's
          nothing wrong with a super pretty github page to display your
          portfolio, but I much prefer the idea that I can build out additional
          features on the site that, in and of themselves, become part of said
          portfolio. <em>META.</em>
        </li>
        <br />
        In the meantime, please click the navbar buttons to access my Github,
        LinkedIn, and resume, and check back soon!
      </p>
    </div>
  );
}

export default About;
