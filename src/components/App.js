/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Login from './Login';
import HomePage from './HomePage';
import fire from '../fire';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailErrors] = useState('');
  const [passwordError, setPasswordErrors] = useState('');
  const [user, setUser] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailErrors('');
    setPasswordErrors('');
  }

  
  const handleLogin = (e) => {
    e.preventDefault();
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case 'auth/invalid-email':
        case 'auth/user-disabled':
        case 'auth/user-not-found':
          setEmailErrors(err.message);
          break;
        case 'auth/wrong-password':
          setPasswordErrors(err.message)
          break;
        default:
      }
    })
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  }

  useEffect(() => {
    authListener();
  }, [])


  return (
    <div className="App">
      {user ? (
        <HomePage handleLogout={handleLogout} />
      ) : (
        <Login
          email ={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
