import React, { useRef, useState } from 'react';
import './SignUp.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const baseApiUrl = 'http://localhost:8080';



function SignUp() {

  const token = 'e692145b-d2e2-4348-bc8e-ffb178044641';

  const [merchantname, setMerchantName] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const history = useHistory();
  // function signupUser(e) {
  //   e.preventDefault();
  //   console.log('Signup Attempt');
  //   let password = document.getElementById('exampleInputPassword1').value;
  //   console.log(password);
  //   let signupFails = false;
  //   if (password.length < 8) {
  //     signupFails = true;
  //   }
  //   if (signupFails) {
  //     console.log('Signup Failed');
  //     // return <Redirect to='/login'  />
  //     history.push('/signup');
  //   } else {
  //     history.push('/');
  //   }

  //   if (password !== cpassword) {
  //     alert('Passwords do not match!');
  //     return;
  // }
  //   // return <Redirect to='/signup'  />

  // }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if (password !== cpassword) {
  //       alert('Passwords do not match!');
  //       return;
  //   }
  // }


  const handleSubmit = (e) => {
    e.preventDefault();

    // if (password !== cpassword) {
    //   alert('Passwords do not match!');
    //   return;
    // }

    fetch(`${baseApiUrl}/merchant/create`, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // credentials: 'include',
        'Authorization': `Bearer ${token}`, // Include the authentication token in the 'Authorization' header
        //Authentication: 'Bearer e692145b-d2e2-4348-bc8e-ffb178044641'
      },
      body: JSON.stringify({
        name: merchantname,
        category: category,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        history.push('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };



    function handleName(event){
      setMerchantName(event.target.value);
    }

    function handleCategory(event){
      setCategory(event.target.value);
    }

    function handleEmail(event){
      setEmail(event.target.value);
    }

    function handlePassword(event){
      setPassword(event.target.value);
    }

    function handleConfirmPassword(event){
      setCpassword(event.target.value);
    }


  //  fetch(`${baseApiUrl}/merchant/create`, {
  //     mode: 'no-cors',
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: merchantname,
  //       category: category,
  //       email: email,
  //       password: password
  //     }),
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });

 

  

  return (
    <div className='createAccount'>
    
        <form className='createAccountForm' /*onSubmit={handleSubmit}*/   onSubmit={handleSubmit} >
          
          <label htmlFor="merchantname">Merchant Name</label><br/>
          <input 
            id="merchantname" 
            type="text" 
            name='merchantname' 
            className='form-control' 
            // aria-describedby='emailHelp'
            placeholder='Merchant Name'

            value={merchantname}
            onChange={handleName}
            /><br />

          <label htmlFor="category">Category</label><br/>
          <select name="category" id="category" className='form-control' placeholder='Category' value={category} onChange={handleCategory}>
              {/* <option value="null"></option> */}
              <option value="Health">Health</option>
              <option value="Beauty">Beauty</option>
              <option value="Food">Food</option>
              <option value="Home & Deco">Home & Deco</option>
              <option value="Animal Care">Animal Care</option>
              <option value="Theater">Theater</option>
          </select><br/>
        
          <label htmlFor="email">Email</label><br/>
          <input
            type="email"
            className='form-control'
            id='email'
            name='email'
            // aria-describedby='emailHelp'
            placeholder='Email'
            
            value={email}
            onChange={handleEmail}
          /><br />
      
          <label htmlFor="password">Password</label><br />
          <input
            type="password"
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            // minLength={8}
         
            
            value={password}
            onChange={handlePassword}
            required 
          /><br />
          {/* {errors.password && <span>{errors.password}</span>} */}

          <label htmlFor="cpassword">Confirm password</label><br />
          <input
            type="password" 
            className='form-control'
            id='cpassword'
            name='cpassword'
            placeholder='Confirm Password'
            minLength={8}
           
            value={cpassword}
            onChange={handleConfirmPassword}
            required 
          
          /><br />
      

          <div >
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
            />

            <label  htmlFor='exampleCheck1' className='terms'>
              I agree to{' '}
              <span id='terms'> terms of service and privacy policy </span>{' '}
            </label>
          </div>

          <Link to="/login">
            <Button
              type='submit'
              className='create-acc-btn'
              variant="contained" 
              color="success" 
              size="large"
            >
              CREATE AN ACCOUNT
            </Button>
          </Link>
        </form>


    </div>
  );
}
export default SignUp;
