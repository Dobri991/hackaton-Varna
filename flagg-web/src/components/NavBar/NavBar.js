import { AppBar, Box, Toolbar, Button } from '@material-ui/core';
import { LinearScale, WbSunny } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function NavBar({ isAuthenticated, setIsAuthenticated }) {
  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsAuthenticated(true);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    history.push('/');
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Link to="/">
          <WbSunny
            color="secondary"
            fontSize="large"
            style={{ fontSize: '3.8em', paddingTop: 6 }}
          />
        </Link>
        <Box flexGrow={1} />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button size="large">Home</Button>
        </Link>
        {isAuthenticated && (
          <>
            <Link to="/outposts" style={{ textDecoration: 'none' }}>
              <Button size="large">Outposts</Button>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                onClick={() => {
                  logout();
                }}
                size="large">
                Log Out
              </Button>
            </Link>
          </>
        )}
        {!isAuthenticated && (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button size="large">Login</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
