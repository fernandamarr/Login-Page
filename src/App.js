import React from 'react';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Reset from './components/Reset';
import Signup from './components/Signup';
import './components/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>            
            <Route exact path="/" component={Login} />
            <Route path="/reset" component={Reset} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
