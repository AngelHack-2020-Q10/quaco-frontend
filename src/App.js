import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import { AppContext, useAppState } from "hooks/useAppState";
// import logo from './logo.svg'
import "App.css";
import Home from "pages/Home/index";
import Post from "pages/Post/index";
import List from "pages/List";
import Toast from "reusables/Toast";
import theme from "utils/theme";
import Signup from "pages/Signup";
import Posts from "pages/Posts";

function App() {
  const { state, actions } = useAppState();

  return (
    <div className="App">
      <AppContext.Provider value={{ state, actions }}>
        <ThemeProvider theme={theme}>
          <ToastProvider
            components={{ Toast: Toast }}
            autoDismiss
            autoDismissTimeout={2000}
          >
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
                <Route path="/posts/:topic">
                  <Posts />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/post">
                  <Post />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </ToastProvider>
        </ThemeProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
