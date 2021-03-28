import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Outposts from './components/Outposts/Outposts';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#FBBD9A'
      },
      secondary: {
        light: '#0066ff',
        main: '#000000',
        contrastText: '#ffffff'
      }
    }
  });

  return (
    <div className="wrapper">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                />
              )}
            />
            <PrivateRoute path="/outposts" component={Outposts} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
