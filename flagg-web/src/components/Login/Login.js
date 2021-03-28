import React, { useState } from 'react';
import Header from '../Header/Header';
import sha256 from 'crypto-js/sha256';
import { withStyles } from '@material-ui/styles';
import {
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';
import logo from './assets/web_hi_res_512.png';
import background from './assets/beach_photo.jpg';
import { useHistory } from 'react-router-dom';

async function loginUser(credentials) {
  return fetch('http://localhost:3500/api/login', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then((data) => data.json());
}

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}));

export default function Login({ isAuthenticated, setIsAuthenticated }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();
  let history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const passHash = await sha256(password);
    const token = await loginUser({
      email: username,
      password: `${passHash}`
    });
    localStorage.setItem('token', token.token);
    setIsAuthenticated(true);
    history.push('/');
  };

  return (
    <Grid container style={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.backgroundImage}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ backgroundColor: '#000000', opacity: 0.6, width: '100%', height: '100%' }}>
          <Grid item xs={8}>
            <Typography variant="h4" color="primary">
              Don't grow up too quickly, lest you forget how much you love the beach.
            </Typography>
            <Typography variant="h2" color="primary">
              Michelle Held
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{ paddingLeft: 20, paddingRight: 20, height: '100%' }}>
        <img
          src={logo}
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            display: 'block',
            margin: 'auto',
            width: 300,
            marginTop: 30,
            marginBottom: 30
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="email"
          id="email"
          label="Email"
          autoComplete="email"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="password"
          id="password"
          label="Password"
          autoComplete="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: 20 }}>
          Log In
        </Button>
      </Grid>
    </Grid>
  );
}

/*
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
*/
