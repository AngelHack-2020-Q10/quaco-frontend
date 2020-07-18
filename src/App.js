import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppContext, useAppState } from "hooks/useAppState";

// import logo from './logo.svg'
import "App.css";
import Home from "pages/Home/index";
import List from "pages/List";

function App() {
  const { state, actions } = useAppState();

  return (
    <div className="App">
      <AppContext.Provider value={{ state, actions }}>
        <Router>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul> */}
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/">
              <Home name="My name" />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
