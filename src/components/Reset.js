import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class Reset extends Component {
	constructor(props) {
		super(props);
		this.sate = {
			email: '',
		}
	}

	render() {
		return(
			<div className ='container'>
				<form>
					<div className='title'>Enter your email address to reset your password.</div>
					<div className='form-group'>
						<input type='email' className='form-control' id='input-email' aria-describedby='email' placeholder='Email Address' required />
					</div>
					<button type='submit' className='btn btn-primary'>Submit</button>
					<div className='links'>
						<Link to='/'>Login</Link>
						<span className='divider'> | </span>
						<Link to='/signup'>Signup</Link>
					</div>
				</form>
			</div>
		)
	}
}

export default Reset;