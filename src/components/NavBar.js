import React from "react";
import "./NavBar.css";
import logo from "../img/logo.png";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
	return (
		<header>
			<div className='menubar'>
				<Link
					to='/'
					style={{ color: "#ea4e3a", textDecoration: "none" }}
				>
					<div className='logo'>
						<img src={logo} alt='logo' />
					</div>
				</Link>

				<nav>
					<ul>
						<li>
							<NavLink
								exact
								to='/'
								// className={({ isActive }) =>
								// 	isActive ? "link active" : "link"
								// }
							>
								Home
							</NavLink>
						</li>

						<li>
							<NavLink
								exact
								to='/aboutus'
								// className={({ isActive }) =>
								// 	isActive ? "link active" : "link"
								// }
							>
								About us
							</NavLink>
						</li>
						<li>
							<NavLink
								exact
								to='/merchantcategorylist'
								// className={({ isActive }) =>
								// 	isActive ? "link active" : "link"
								// }
							>
								Merchants
							</NavLink>
						</li>
						<li>
							<NavLink
								exact
								to='/contact'
								// className={({ isActive }) =>
								// 	isActive ? "link active" : "link"
								// }
							>
								Contact Us
							</NavLink>
						</li>
					</ul>
				</nav>

				<Link exact to='/login' id='menu-login-link'>
					<button type='button' id='menu-login-button'>
						MERCHANT LOG IN
					</button>
				</Link>
			</div>
		</header>
	);
}

export default NavBar;
