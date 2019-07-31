import React from 'react';
import {
  HeadLogo1
  // HeadLogo2
} from './HeadLogo';
import NavBar from './NavBar';
import 'scss/main.scss';

function Header() {
  return (
    <header className='header'>
      <NavBar />
      <HeadLogo1 className='head-logo1' />
      <div className='header__title'>
        <span>
          welcome to &nbsp;
        </span>
        baz
        <br />
        b0t.
        <br />
        dev
      </div>
      <div className='header__subtitle'>
        mia andor baz, software engineer:
        <br /> part-b0t, all baz, full-stack!
      </div>
    </header>
  );
}

export default Header;
