import React from "react";
import "./App.css";

// RRD
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Screens
import NotesBlog from "./screens/NotesBlog";
import CurrencyConverter from "./screens/CurrencyConverter";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <>
              <nav>
                <ul>
                  <li>
                    <Link to="/notesBlog">Blog de notas</Link>
                  </li>
                  <li>
                    <Link to="/currencyConverter">Conversor de divisas</Link>
                  </li>
                </ul>
              </nav>
              <h1>Home</h1>
            </>
          </Route>
          <Route path="/notesBlog">
            <NotesBlog />
          </Route>
          <Route path="/currencyConverter">
            <CurrencyConverter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
