import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialMedia from './SocialMedia';
import emailjs from 'emailjs-com';
import '../style.css';
import { init } from 'emailjs-com';
init('user_RN3Kx39GSxwLCXr4TfTDU');

function Form() {
	const [toSend, setToSend] = useState({
		from_name: '',
		email: '',
		message: '',
	});
	const [sent, setSent] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();

		emailjs.send('contact_form', 'template_ycyvhgw', toSend).then(
			(result) => {
				console.log(result.text);
				setSent(true);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};
	return (
		<Container fluid className='form-section'>
			<Container>
				<form onSubmit={onSubmit}>
					<div className='mb-3'>
						<label for='contameform-email' className='form-label'>
							Name
						</label>
						<input
							type='text'
							className='form-control'
							name='from_name'
							id='contactmeform-name'
							aria-describedby='emailHelp'
							onChange={handleChange}
						/>
					</div>
					<div className='mb-3'>
						<label
							htmlFor='contameform-email'
							className='form-label'
						>
							Email address
						</label>
						<input
							type='email'
							name='email'
							className='form-control'
							id='contactmeform-email'
							aria-describedby='emailHelp'
							onChange={handleChange}
						/>
					</div>
					<div class='mb-3'>
						<label htmlFor='form-textarea' className='form-label'>
							Message
						</label>
						<textarea
							className='form-control'
							id='form-textarea'
							rows='3'
							onChange={handleChange}
							name='message'
						></textarea>
					</div>
					<button type='submit' className='btn btn-primary'>
						Send
					</button>
				</form>
				{sent ? (
					<div
						className='alert alert-success'
						role='alert'
						style={{ marginTop: '20px' }}
					>
						Email Sent!
					</div>
				) : (
					''
				)}
			</Container>
			<SocialMedia />
		</Container>
	);
}

export default Form;
