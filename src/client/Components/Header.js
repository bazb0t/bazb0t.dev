import React from 'react';
import { HeadLogo1, HeadLogo2 } from './HeadLogo';
// import NavBar from './NavBar';
import 'scss/bazb0t.scss';

function Header() {
  return (
    <div className='header'>
      <HeadLogo1 />
      <div className='head-center'>
        <header> welcome to bazb0t.dev!</header>
        <h4>
          mia andor baz, software engineer: part-b0t, all baz, full-stack!
        </h4>
      </div>
      <HeadLogo2 />
    </div>
  );
}

export default Header;
