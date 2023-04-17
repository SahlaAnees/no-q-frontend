import React from 'react';
import './Login.css';
import profile from '../img/login-img.png';
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // function attemptLogin(e) {
  //   e.preventDefault();

  //   console.log('LOgin Attempt');

  //   let authFails = false;
  //   if (authFails) {
  //     console.log('back to login');
  //     // return <Redirect to='/login'  />
  //     history.push('/login');
  //   }
  //   // return <Redirect to='/signup'  />
  //   history.push('/');
  // }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // For manual testing purposes, hardcode the expected email and password values
    const expectedEmail = "test@example.com";
    const expectedPassword = "password123";

    // Check if the email and password are correct
    if (email === expectedEmail && password === expectedPassword) {
      // Navigate to the relevant profile page
      history.push("/merchantprofile");
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  };

 

  return (


    <Grid className="Login" container spacing={5}>
     
        <Grid item xs={12} sm={6} className="Login-img">
            <img src={profile} alt="login-image" />
        </Grid>

        <Grid item xs={12} sm={6} className="Login-form">
            <div className="login-form-box">
                <h1>Welcome...!</h1>
                
                <form onSubmit={handleSubmit}>

                <div className='form-textfill'>

                    {/* <label for="exampleInputEmail1">Email</label> */}
                    <label for="email">Email</label><br />
                    <input
                    type='email'
                    class='form-control'
                    id='email'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    className='textfield'
                    value={email}
                    onChange={handleEmailChange}
                    /><br />

                 
                    {/* <label for="exampleInputPassword1">Password</label> */}
                    <label for="password">Password</label><br />
                    <input
                      type='password'
                      class='form-control'
                      id='password'
                      placeholder='Password'
                      className='textfield'
                      value={password}
                      onChange={handlePasswordChange}
                    />

                </div>
              
              <Button
                type='submit'
                variant="contained" 
                size="medium" 
                className='Login-btn'
                //onClick={attemptLogin}
              >
                Log In
              </Button>
            </form>

            <div className='newMerchantbox'>
              <h4 id='newmbr'>
                {' '}
                New Merchant ?{' '}
                
                <Link to='/signup' id='create-acc'>
                  {' '}
                  Create Account
                </Link>

              </h4>
            </div>
        
            </div>
        </Grid>
           
        </Grid>
 
  );
}

export default Login;
