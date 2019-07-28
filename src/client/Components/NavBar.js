import React from 'react';
import 'scss/bazb0t.scss';

import resume from 'assets/Mia.Baz.pdf';

const NavLinks = [
  {
    href: 'https://github.com/bazb0t',
    target: '_blank',
    rel: 'noopener noreferrer',
    value: 'github'
  },
  {
    href: 'https://linkedin.com/in/miabaz',
    target: '_blank',
    rel: 'noopener noreferrer',
    value: 'linkedIn'
  },
  {
    href: resume,
    target: '_blank',
    rel: 'noopener noreferrer',
    value: 'resume'
  }
];

export function NavBar() {
  return (
    <div className='navbar'>
      {NavLinks.map(link => {
        return (
          <div key={link.value}>
            <a
              href={link.href}
              target={link.target}
              rel={link.rel}
              value={link.value}
            >
              {link.value}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default NavBar;
