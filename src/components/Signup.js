import React, { Component } from 'react';
import './style.css'

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {},
			errors: {}
		}
	}

	handleValidation() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;
		
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
			alert('Signup form submitted successfully');
		}
	}

	handleChange(field, e) {         
		let fields = this.state.fields;
		fields[field] = e.target.value;        
		this.setState({fields});
	}

	render() {
		return (
		<div className='container'>
		<div className='title'>Add your info to start your account</div>
			<form name='login-form' onSubmit={this.submitForm.bind(this)}>
				<div className='form-row'>             
					<div className='form-group col-md-6'>
						<label>Preferred Language<span className="asterisk"> *</span></label>
						<select id='inputLanguage' className='form-control'>
							<option selected>English</option>
							<option>French</option>
							<option>Spanish</option>
						</select>
					</div>
					<div className='form-group col-md-6'>
						<label>Country<span className="asterisk"> *</span></label>
						<select id='inputCountry' className='form-control' required>
							<option selected>United States</option>
							<option>Canada</option>
							<option>Australia</option>
							<option>United Kingdom</option>
							<option>Ireland</option>
						</select>
					</div>
					<div className='form-group col-md-6'>
						<label>First Name<span className="asterisk"> *</span></label>
						<input type='text' className='form-control' id='firstName' placeholder='First Name' required />
					</div>
					<div className='form-group col-md-6'>
						<label>Last Name</label>
						<input type='text' className='form-control' id='lastName' placeholder='Last Name' required />
					</div>
					<div className='form-group col-md-6'>
						<label>Login / Email<span className="asterisk"> *</span></label>   
						<input type='email' className='form-control' id='input-email' aria-describedby='email' placeholder='Email Address' required />
					</div>
					<div className='form-group col-md-6'>
						<label>Phone Number<span className="asterisk"> *</span></label>            
						<input type='tel' id='phone' className='form-control' name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='215-321-4567' required />    
					</div>
					<div className='form-group col-md-6'>
						<label>Password<span className="asterisk"> *</span></label>              
						<input ref='password' type='password' name='password' className='form-control' placeholder='Password'value={this.state.fields['password'] || ''} onChange={this.handleChange.bind(this, 'password')} required />
						<div className='errorMsg'>{this.state.errors.password}</div>
					</div>
					<div className='form-group col-md-6'>
						<label>Confirm Password<span className="asterisk"> *</span></label>              
						<input type='password' className='form-control' id='input-password' placeholder='Confirm Password' required />
					</div>
					<button type='submit' className='btn btn-primary'>Sign in</button>
				</div>
			</form>
		</div>
			
		)
	}
}

export default Signup;