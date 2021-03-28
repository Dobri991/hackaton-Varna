import React from 'react';
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const token = localStorage.getItem('token');
      if (!token) {
        return <Redirect to="/login" />;
      }

      return <Component {...props} />;
    }}
  />
);
