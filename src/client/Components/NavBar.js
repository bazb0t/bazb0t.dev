import React from 'react';
import 'scss/main.scss';
import resume from 'assets/Mia.Baz.pdf';
// import markGithub from 'assets/mark-github.svg';
// import linkedIn from 'assets/linkedin.svg';

const NavLinks = [
  {
    href: '/about',
    rel: 'noopener noreferrer',
    value: 'about'
  },
  {
    href: 'https://github.com/bazb0t',
    target: '_blank',
    rel: 'noopener noreferrer',
    value: 'gitHub'
    // value: <img src={markGithub} alt="GitHub"/>,
  },
  {
    href: 'https://linkedin.com/in/miabaz',
    target: '_blank',
    rel: 'noopener noreferrer',
    value: 'linkedIn'
    // value: <img src={linkedIn} alt="LinkedIn"/>,
  },
  {
    href: resume,
    target: '_blank',
    rel: 'noopener noreferrer',
    value: 'resume'
  },
  {
    href: '/projects',
    rel: 'noopener noreferrer',
    value: 'projects'
  },
  // {
  //   href: '/Contact',
  //   rel: 'noopener noreferrer',
  //   value: 'contact'
  // }
];

export function NavBar() {
  return (
    <nav className='nav'>
      {NavLinks.map(link => {
        return (
          <div key={link.value}>
            <a
              href={link.href}
              target={link.target}
              rel={link.rel}
              value={link.value}
              className={link.class}
            >
              {link.value}
            </a>
          </div>
        );
      })}
    </nav>
  );
}

export default NavBar;
