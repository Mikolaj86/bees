import React from 'react';
import logo from './logo.svg';
import './App.css';
import Error404 from "./error404";
import Register from "./register";
import Login from "./register";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



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
                        <Link to="/error404">Error 404</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={App} />
                <Route path="/error404" component={Error404} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    );
}
export default Menu;
// export default App;
