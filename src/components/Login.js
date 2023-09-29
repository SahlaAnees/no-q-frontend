import React, { useContext } from 'react';
import AuthContext from './authContext';
import "./Login.css";
import profile from "../img/login-geo2.png";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import axios from "axios";
const baseApiUrl = "http://localhost:8080";

function Login() {
	const history = useHistory();
 	const { setAuthKey } = useContext(AuthContext);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const postData = {
			email: formData.email,
			password: formData.password,
		};

		axios
			.post(`${baseApiUrl}/merchant/login`, postData)
			.then((response) => {
				console.log(response.data.data);
        setAuthKey(response.data.data);
				history.push("/merchantprofile");
			})
			.catch((error) => {
				console.log(error);
				history.push("/login");
			});
	};

	return (
		<Grid className='Login' container spacing={5}>
			<Grid item xs={6} className='Login-img'>
				<img src={profile} alt='login-image' />
			</Grid>

			<Grid item xs={6} className='Login-form'>
				<div className='login-form-box'>
					<h1>Welcome...!</h1>

					<form onSubmit={handleSubmit}>
						<div className='form-textfill'>
							<label htmlFor='email'>Email</label>
							<br />
							<input
								type='email'
								className='form-control'
								id='email'
								name='email'
								// aria-describedby='emailHelp'
								placeholder='Email'
								value={formData.email}
								onChange={handleInputChange}
							/>
							<br />

							<label htmlFor='password'>Password</label>
							<br />
							<input
								type='password'
								className='form-control'
								id='password'
								name='password'
								placeholder='Password'
								value={formData.password}
								onChange={handleInputChange}
								required
							/>
						</div>

						<Button
							type='submit'
							variant='contained'
							size='medium'
							className='Login-btn'
							//onClick={attemptLogin}
						>
							Log In
						</Button>
					</form>

					<div className='newMerchantbox'>
						<h4 id='newmbr'>
							{" "}
							New Merchant ?{" "}
							<Link to='/signup' id='create-acc'>
								{" "}
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
