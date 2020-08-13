import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<ul>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/about'>
					<li>About Me</li>
				</Link>
				<Link to='/skills'>
					<li>Skills</li>
				</Link>
				<Link to='/work'>
					<li>Work</li>
				</Link>
				<Link to='/contact'>
					<li>Contact</li>
				</Link>
			</ul>
			<ul>
				<li><a href="https://github.com" target='_blank'>GitHub</a></li>
				<li><a href="https://linkedin.com" target='_blank'>LinkedIn</a></li>
			</ul>
		</nav>
	);
};

export default Nav;
