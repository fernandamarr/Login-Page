import React from 'react';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import './components/style.css';
import Login from './components/Login';
import Reset from './components/Reset';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>            
          <Route exact path="/" component={Login} />
          <Route path="/reset" component={Reset} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
