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

<img width="204" alt="Screenshot 2020-11-26 at 18 29 09" src="https://user-images.githubusercontent.com/33703873/100383507-08d10400-301e-11eb-8ddb-fa67274dd58e.png">

#### ...and past the snippet bellow
[Taken from the official EmailJS documentation](https://www.emailjs.com/docs/examples/reactjs/)

`src > Contact.js`

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

### Create the file .env in the root of your project
Paste the snippet in it

`.env`

    REACT_APP_USER_ID=
    REACT_APP_TEMPLATE_ID=
    REACT_APP_SERVICE_ID=
    
Once we create the app with _create-react-app_ we need to prefix every variable with **REACT_APP_**
    
### Head over [emailjs.com](https://www.emailjs.com/docs/examples/reactjs/) and create an account (or Sing in)

Go to **Email Services** and _Add New Service_

![Screenshot 2020-11-26 at 20 14 31](https://user-images.githubusercontent.com/33703873/100387354-2d31de00-3028-11eb-9339-edf3eaba18a7.png)

#

Choose an email service (in this case I'm going to use Gmail)

![Screenshot 2020-11-26 at 20 14 52](https://user-images.githubusercontent.com/33703873/100387371-3753dc80-3028-11eb-834e-a087b6d5a72f.png#)

#
You can change its name or keep the default

![create_email_server](https://user-images.githubusercontent.com/33703873/100387399-49ce1600-3028-11eb-96d6-0614c389268b.gif)

1. **Connect account**
2. Choose your email
3. **Allow**
4. And finally hit **Create Service**

Under **Email Service** tab you will find your _Service ID_.
1. Copie it
2. Paste it into .env

```
REACT_APP_USER_ID=
REACT_APP_TEMPLATE_ID=
REACT_APP_SERVICE_ID= asg84Sf (illustration only)
````

![Screenshot 2020-11-26 at 19 42 43](https://user-images.githubusercontent.com/33703873/100384253-02dc2280-3020-11eb-94fb-254fec407d09.png)

### Create an Email Tamplate

Under **Email Tamplate** tab:
1. Create New Tamplate
2. Change the _Best wishes, EmailJS team_ to any message you like
3. **Save**
4. Save the _Template ID_

![Screenshot 2020-11-26 at 21 26 45](https://user-images.githubusercontent.com/33703873/100389613-25753800-302e-11eb-9e49-8c7e9c09a797.png)
