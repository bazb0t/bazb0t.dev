import 'scss/main.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        </Switch>
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
