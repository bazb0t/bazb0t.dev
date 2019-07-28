import 'scss/bazb0t.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; //  Switch, Route, Link

import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Header />
        <About />
        <Projects />
      </div>
    </Router>
  );
}

export default App;

// {
//   /* <li><Link to={'/create'}>Create</Link></li>
// <li><Link to={'/index'}>List</Link></li>
// </ul>
// <hr />
// <Switch>
//   <Route exact path='/create' component={ Create } />
//   <Route path='/index' component={ Index } />
// </Switch> */
// }
