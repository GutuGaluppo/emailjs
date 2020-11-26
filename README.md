# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### Every command prefix by **$** sign needs to be run into the terminal

#### `$ npx create-react-app emailjs`

#### Available Scripts

In the project directory, you can run:

##### `$ npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### Let's install EmailJS

##### `$ npm install emailjs-com`

#### Create Contact.js file into _src_ folder...

#### ...and past the snippet bellow
[Taken from the official EmailJS documentation](https://www.emailjs.com/docs/examples/reactjs/)

    import React from 'react';
    import emailjs from 'emailjs-com';

    import './Contact.css';

    export default function Contact() {

	function sendEmail(e) {
	    e.preventDefault();

		emailjs.sendForm(
		 'YOUR_SERVICE_ID', 
		 'YOUR_TEMPLATE_ID', 
		 e.target, 
		 'YOUR_USER_ID'
		)
		.then((result) => {
		    console.log(result.text);
		  }, (error) => {
		console.log(error.text);
	    });
	}

	return (
	    <form className="contact-form" onSubmit={sendEmail}>
		<input type="hidden" name="contact_number" />
		<label>Name</label>
		<input type="text" name="user_name" />
		<label>Email</label>
		<input type="email" name="user_email" />
		<label>Message</label>
		<textarea name="message" />
		<input type="submit" value="Send" />
	    </form>
	);
    }
    
### Now that we have our template, let's install _dotenv_ to place our personall data
[dotenv](https://www.npmjs.com/package/dotenv)

##### `$ npm install dotenv`

**Dotenv** is a zero-dependency module that loads [environment variables](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa) from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

### Create file .env in the root folder of your project

once we create the app running _create-react-app_ we need to use REACT_APP_ before any definition

    REACT_APP_USER_ID=
    REACT_APP_TEMPLATE_ID=
    REACT_APP_SERVICE_ID=
    
### Head over [emailjs.com](https://www.emailjs.com/docs/examples/reactjs/) and create an account (or Sing in)
