import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css';

function Form() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Container fluid className='form-section'>
			<Container>
				<form>
					<div className='mb-3'>
						<label for='exampleInputEmail1' className='form-label'>
							Email address
						</label>
						<input
							type='email'
							className='form-control'
							id='contactmeform-email'
							aria-describedby='emailHelp'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div class='mb-3'>
						<label for='form-textarea' className='form-label'>
							Message
						</label>
						<textarea
							className='form-control'
							id='form-textarea'
							rows='3'
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
					</div>
					<button type='submit' className='btn btn-primary'>
						Send
					</button>
				</form>
			</Container>
		</Container>
	);
}

export default Form;
