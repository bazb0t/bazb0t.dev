import React from 'react';
import Octicon, { getIconByName } from '@primer/octicons-react';
import { Projects01, Projects03 } from 'assets/assetsManifest';
import 'scss/bazb0t.scss';

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
  }
];

function Projects() {
  return (
    <div className='content-wrapper'>
      <header>Projects</header>
      {projects.map((project, i, arr) => {
        return (
          <div className='project-wrapper' key={project.id} id={project.id}>
            <div className='project-icons' align='center'>
              <h2>
                {project.name}{' '}
                <a href={project.github}>
                  <Octicon
                    icon={getIconByName('mark-github')}
                    size='medium'
                    ariaLabel={`Github repository for ${project.name}`}
                  />
                </a>{' '}
                <a href={project.deployed}>
                  <Octicon
                    icon={getIconByName('globe')}
                    size='medium'
                    ariaLabel={`${project.name} deployed on the web`}
                  />
                </a>{' '}
                {project.play ? (
                  <a href={project.play}>
                    <Octicon
                      icon={getIconByName('play')}
                      size='medium'
                      ariaLabel={project.videoalt}
                    />
                  </a>
                ) : (
                  ' '
                )}
              </h2>
              {project.img ? (
                <div className='project-img'>
                  <img src={project.img} alt={`${project.name}`} />
                </div>
              ) : (
                ' '
              )}
              <div>
                <p>{project.description}</p>
                <p>
                  <b>developers: </b>
                  {project.devs}
                </p>
                {i !== arr.length - 1 ? <hr /> : <></>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
