import "../bootstrap/css/bootstrap.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Components/Header";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <About />
      </div>
    </Router>
  );
}

export default App;

{
  /* <li><Link to={'/create'}>Create</Link></li>
<li><Link to={'/index'}>List</Link></li>
</ul>
<hr />
<Switch>
  <Route exact path='/create' component={ Create } />
  <Route path='/index' component={ Index } />
</Switch> */
}
