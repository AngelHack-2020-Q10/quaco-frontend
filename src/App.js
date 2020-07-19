import React, { useEffect } from "react";
import { ThemeProvider } from "emotion-theming";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import { AppContext, useAppState } from "hooks/useAppState";
import "App.css";
import Home from "pages/Home/index";
import Post from "pages/Post/index";
import List from "pages/List";
import Toast from "reusables/Toast";
import theme from "utils/theme";
import Signup from "pages/Signup";
import TypeQuarantineDate from "pages/TypeQuarantineDate";
import Posts from "pages/Posts";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
              <ScrollToTop />
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
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/type-quarantine">
                  <TypeQuarantineDate />
                </Route>
                <Route path="/post">
                  <Post />
                </Route>
                <Route path="/">
                  <Signup />
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
