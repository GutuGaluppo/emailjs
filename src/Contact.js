import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
require('dotenv').config();

export default function Contact() {
	const userID = process.env.REACT_APP_USER_ID;
	const templateID = process.env.REACT_APP_TEMPLATE_ID;
	const serviceID = process.env.REACT_APP_SERVICE_ID;

	function sendEmail(e) {
		e.preventDefault();

		console.log('email sent')

		emailjs.sendForm(
			serviceID,
			templateID,
			e.target,
			userID
		)
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		e.target.reset();
	}

	return (
		<div className="form_wrapper">
			<form onSubmit={sendEmail}>
				<input type="hidden" name="contact_number"/>
				<label>Name</label>
				<input type="text" name="from_name" placeholder="John Mayer"/>
				<label>Email</label>
				<input type="email" name="user_email" placeholder="john@email.com"/>
				<label>Phone</label>
				<input type="phone" name="phone" placeholder="987654321"/>
				<label>Subject</label>
				<input type="text" name="subject" placeholder="Let's keep in touch..."/>
				<label>Message</label>
				<textarea name="message" rows="5" placeholder="Leave our message here..."/>
				<input type="submit" value="Submit" className="btn"/>
			</form>
		</div>
	);
}