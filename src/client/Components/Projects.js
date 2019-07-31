import React from 'react';
import Octicon, { getIconByName } from '@primer/octicons-react';
import { Projects01, Projects03, Projects04 } from 'assets/assetsManifest';
import 'scss/main.scss';

const projects = [
  {
    id: 3,
    name: 'Golden-KTV',
    github: 'https://github.com/gold-bravo/golden-ktv',
    deployed: 'https://golden-ktv.herokuapp.com',
    play: 'https://www.youtube.com/watch?v=k54qEKKah3o',
    videoalt: 'Golden-KTV Capstone presentation on YouTube',
    description:
      'Feeling the itch to sing but your friends not down for the 2-hour commute to KTown? Introducing Golden-KTV, a revolutionary way for you and your friends to sing karaoke without ever leaving your home!',
    devs: `Mia Baz, Billy Tan, Jenny Wong, Aaron Nah`,
    img: Projects03
  },
  {
    id: 1,
    name: 'Books-a-Lot',
    github: 'https://github.com/black-swift-1902/books-a-lot',
    deployed: 'https://books-a-lot-co.herokuapp.com/',
    play: null,
    videoalt: null,
    description: 'An e-commerce web app for a bookstore worthy of King Arthur',
    devs: `Mia Baz, Juan Marges, Grace Lee, Gordon Wu`,
    img: Projects01
  },
  {
    id: 2,
    name: 'just-listen',
    github: 'https://github.com/bazb0t/just-listen',
    deployed: 'https://just-listen.herokuapp.com',
    play: null,
    videoalt: null,
    description: `play a four-part a cappella chord in just intonation.
Note: this project is being rebuilt from scratch! More available soon!`,
    devs: 'Mia Baz',
    img: null
  },
  {
    id: 4,
    name: 'bazb0t.dev',
    github: 'https://github.com/bazb0t/bazb0t',
    deployed: 'https:/bazb0t.dev',
    play: null,
    videoalt: null,
    description: `You're on it! I added this site to my projects as it's meant to be a playground for new skills and features. This most recent update includes responsive CSS grid with flexbox, and I'm particularly excited about how the retro game cartridges turned out!`,
    devs: `Mia Baz`,
    img: Projects04,
  },
];

function Projects() {
  return (
    <div className='comcon'>
      <h1>Projects</h1>
      <div className="project-wrapper">
      {projects.map((project, i, arr) => {
        return (
          <div key={project.id} id={project.id}>
            <div className="project-flex-wrapper">
            {/* cartridge card for Game Boy effect */}
            <div className='projectCartridge'>
              {/* title w/ wrapper */}
              <div className='projectCartridge projectCartridge__title--wrapper'>
                <div className='projectCartridge projectCartridge__title'>
                  {project.name}
                </div>
              </div>
              {project.img ? (
                <img className='projectCartridge__img' src={project.img} alt={`${project.name}`} />
                ) : (
                  ' '
                  )}
                <Octicon
                  className='Octicon-gameboy'
                  icon={getIconByName('triangle-down')}
                  ariaLabel='triangle-down'
                  size='medium'
                  />
            </div>
            {/* out of cartridge! info/public artifacts: */}
            <div className='project-info'>
                <p>{project.description}</p>
                <p><strong>developers: </strong>
            {project.devs}</p>
            <div className='project-content__icons'>
              <a href={project.github}>
                <Octicon
                  icon={getIconByName('mark-github')}
                  ariaLabel={`Github repository for ${project.name}`}
                  size='medium'
                  />
              </a>{' '}
              <a href={project.deployed}>
                <Octicon
                  icon={getIconByName('globe')}
                  ariaLabel={`${project.name} deployed on the web`}
                  size='medium'
                  />
              </a>{' '}
              {project.play ? (
                <a href={project.play}>
                  <Octicon
                    icon={getIconByName('play')}
                    ariaLabel={project.videoalt}
                    size='medium'
                    />
                </a>
              ) : (
                ' '
                )}
                </div>{/*end project icons div */}
            </div> {/*end project info div */}
            </div>
            {i !== arr.length - 1 ? <hr /> : <></>}
          </div>
        );
      })}
      </div>
      </div>
  );
}

export default Projects;
