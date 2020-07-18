import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AppContext, useAppState } from "hooks/useAppState";
// import logo from './logo.svg'
import "App.css";
import Home from "pages/Home/index";
import List from "pages/List";
import theme from "utils/theme";

function App() {
  const { state, actions } = useAppState();

  return (
    <div className="App">
      <AppContext.Provider value={{ state, actions }}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
