import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from 'axios';

const baseApiUrl = "http://localhost:8080";

function SignUp() {
	const [formData, setFormData] = useState({
		merchantname : "",
		category : "",
		email : "",
		password : "",
		cpassword :""
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	  };
	

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(formData);

		const postData = {
			name: formData.merchantname,
			category: formData.category,
			email: formData.email,
			password: formData.password
		}
		
		axios.post(`${baseApiUrl}/merchant/create`, postData)
		.then(response => {
			console.log(response.data);
		})
		.catch(error => {
			console.log(error);
		});
	};


	return (
		// <div className="createAccount">
		<form  onSubmit={handleSubmit} className="createAccountForm">
			<label htmlFor="merchantname">Merchant Name</label>
			<br />
			<input
				id="merchantname"
				type="text"
				name="merchantname"
				className="form-control"
				placeholder="Merchant Name"
				value={formData.merchantname}
				onChange={handleInputChange}
			/>
			<br />

			<label htmlFor="category">Category</label>
			<br />
			<select
				name="category"
				id="category"
				className="form-control"
				placeholder="Category"
				value={formData.category}
				onChange={handleInputChange}
			>
				<option value="Health">Health</option>
				<option value="Beauty">Beauty</option>
				<option value="Food">Food</option>
				<option value="Home & Deco">Home & Deco</option>
				<option value="Animal Care">Animal Care</option>
				<option value="Theater">Theater</option>
			</select>
			<br />

			<label htmlFor="email">Email</label>
			<br />
			<input
			type="email"
			className="form-control"
			id="email"
			name="email"
			// aria-describedby='emailHelp'
			placeholder="Email"
			value={formData.email}
			onChange={handleInputChange}
			/>
			<br />

			<label htmlFor="password">Password</label>
			<br />
			<input
			type="password"
			className="form-control"
			id="password"
			name="password"
			placeholder="Password"
			// minLength={8}

			value={formData.password}
			onChange={handleInputChange}
			required
			/>
			<br />
			{/* {errors.password && <span>{errors.password}</span>} */}

			<label htmlFor="cpassword">Confirm password</label>
			<br />
			<input
			type="password"
			className="form-control"
			id="cpassword"
			name="cpassword"
			placeholder="Confirm Password"
			minLength={8}
			value={formData.cpassword}
			onChange={handleInputChange}
			required
			/>
			<br />

			{/* <Link to="/login"> */}
			<Button
				type="submit"
				className="create-acc-btn"
				variant="contained"
				color="success"
				size="large"
			>
				CREATE AN ACCOUNT
			</Button>
			{/* </Link> */}
		</form>
		// </div>
	);
}

export default SignUp;
