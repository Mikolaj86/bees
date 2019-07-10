import React from 'react';
import logo from './logo.svg';
import './App.css';
import Error404 from "./error404";
import RegisterUser from "./components/registration/register";
import { Login } from "./components/login/login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Menu() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">App</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                <Route exact path="/" component={App} />
                <Route path="/register" component={RegisterUser} />
                <Route path="/login" component={Login} />
                <Route component={Error404} />
                </Switch>
            </div>
        </Router>
    );
}
export default Menu;
