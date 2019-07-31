import React from 'react';
import 'scss/main.scss';
import { cardback } from 'assets/assetsManifest';

function DI() {
  return (
    <div className='comcon'>
      <center>
        <h3>A Note on Identity</h3>
      </center>
      <div className='DI-content'>
        <div className='DI__text'>
          <p>
            It's 2019, and as I am the master of my own domain -- literally --
            I'd like to take this opportunity to share something about myself:
          </p>
          <center>
            <h3>
              <strong>
                I am transgender-nonbinary, and my pronouns are
                they/them/theirs.
              </strong>
            </h3>
          </center>
          <p>
            It's important to me that I put this out there early: for starters,
            there's a distinct lack of diversity in tech -- nonbinary folks are
            especially underrepresented, as one can easily assume by attempting
            to Google statistics on how many nonbinary people there are in the
            country, let alone in this industry.
          </p>
          <p>
            Further, I strive to be as open as I can be with my identity and
            lived experiences because that is a luxury not everyone like me can
            afford...yet. I've seen firsthand the effect my authenticity has in
            making this world a more inclusive and supportive place, and while
            it's going to be a long time coming, that future can only be secured
            by the work we do today.
          </p>
        </div>
        <div className='DI__col2'>
          <p>
            You can help! If you haven't seen it, this is the back of my
            business card:
          </p>
          <img
            src={cardback}
            alt='back of business card describing they/them/their(s) pronoun usage and tips to be inclusive'
            width='500px'
            align='center'
          />
          <p>
            It bears repeating, so, look: you're going to slip up and use the
            wrong pronouns. Mistakes happen all the time. Just say whatever it
            was again with the right pronoun and move on -- I'm <em>way</em>{' '}
            more interested in what you were actually trying to say!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DI;
