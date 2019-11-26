import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {},
			errors: {}
		}
   }

	// Validate that the user has entered an email and password that is at least 8 char long
	handleValidation() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		if(!fields['email']){
			formIsValid = false;
			errors['email'] = 'Please enter your email';
		}
		if(!fields['password']) {
			formIsValid = false;
			errors['password'] = 'Please enter your password'
		}
		if(fields['password'].length < 8 ) {
			formIsValid = false;
			errors['password'] = 'Minimum length is 8 characters'
		}
		this.setState({errors: errors});
		return formIsValid;
	}

	// Alert that form was submitted without errors
	submitForm(e) {
		e.preventDefault();
		if(this.handleValidation()){
			alert('You have logged in successfully');
		}
	}

	handleChange(field, e) {         
		let fields = this.state.fields;
		fields[field] = e.target.value;        
		this.setState({fields});
	}

	render() {
		return(
			<div className ='container'>
				<form name='form' onSubmit={this.submitForm.bind(this)}>
					<div className='form-group'>
						<input ref='email' type='email' name='email' className='form-control' placeholder='Email Address' value={this.state.fields['email'] || ''} onChange={this.handleChange.bind(this, 'email')} required />
						<div className='errorMsg'>{this.state.errors.email}</div>
					</div>
					<div className='form-group'>
						<input ref='password' type='password' name='password' className='form-control' placeholder='Password' value={this.state.fields['password'] || ''} onChange={this.handleChange.bind(this, 'password')} required />
						<div className='errorMsg'>{this.state.errors.password}</div>
					</div>
					<button type='submit' className='btn btn-primary'>Login</button>
					<div className='links'>
						<Link to='/reset' className='links'>Forgot my password</Link>
						<span className='divider'> | </span>
						<Link to='/signup' className='links'>Sign Up</Link>  
					</div>
				</form>
			</div>
		)
	}
}

export default Login;