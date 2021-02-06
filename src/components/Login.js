import React from 'react';
import { TextField, Button, Card, Typography } from '@material-ui/core';


import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },});


const Login = (props) => {
  const { 
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError,
  } = props;

  return (
    <div 
      className="login-page"
      style={{
        textAlign: 'center',
      }}
      >
      <Typography 
        color="primary" 
        variant="h3"
        style={{
          margin: '2rem'
        }}
      >
        OpenSky 
      </Typography>
      <Card 
      style={{
        display: 'inline-block',
        padding: '30px',
        textAlign: 'center',
      }}
      >
        <ThemeProvider theme={theme}>
 <div className="App">
   <div>
     <Typography variant="h2" gutterBottom>
       Real-Time Flight Tracker
     </Typography>
     <Button variant="contained" color="secondary">Ready To Go</Button>
   </div>
 </div>
</ThemeProvider>
      <form onSubmit={handleLogin}>
        <TextField
          id="standard-basic" 
          label="Email"
          type="email"
          name="email"
          className="form-control"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <p>{emailError}</p>
        <TextField
          id="standard-basic" 
          label="Password"
          type="password"
          name="password"
          className="form-control"
          autoComplete="new-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <p>{passwordError}</p>
        <Button variant="contained" color="primary" type="submit">Login</Button>
      </form>
    </Card>
    </div>
  );
};

export default Login;
