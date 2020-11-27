# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

_Every command prefix with **$** sign needs to be run into the terminal_

##### `$ npx create-react-app emailjs`

#### Available Scripts

In the project directory, you can run:

##### `$ npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Install EmailJS

##### `$ npm install emailjs-com`

Create _Contact.js_ file into _src_ folder...

<img width="304" alt="contactJS_path" src="https://user-images.githubusercontent.com/33703873/100430501-2bebca00-3097-11eb-8fb3-35e4dfcd8031.png">

...and past the snippet bellow
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
    

## Create the file .env in the root of your project
Paste the snippet in it

`.env`

    REACT_APP_USER_ID=
    REACT_APP_TEMPLATE_ID=
    REACT_APP_SERVICE_ID=
    
Once we create the app with _create-react-app_ we need to prefix every _enviroment variable_ with **REACT_APP_**

## Install _dotenv_
[dotenv](https://www.npmjs.com/package/dotenv)
 

##### `$ npm install dotenv`

>**Dotenv** is a zero-dependency module that loads [environment variables](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use->them-f602f66d15fa) from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App >methodology.

<br/>
<hr>
<br/>
    
### Head over [emailjs.com](https://www.emailjs.com/docs/examples/reactjs/) and create an account (or Sing in)

Go to **Email Services** and _Add New Service_

![add_email_service](https://user-images.githubusercontent.com/33703873/100430576-47ef6b80-3097-11eb-98e1-b59316d171f8.png)

<br />
<br />

Choose an email service (in this case I'm going to use Gmail)

![email_service_opt](https://user-images.githubusercontent.com/33703873/100430900-addbf300-3097-11eb-8e69-89dcac4ee91c.png)

<br />
<br />

You can change its name or keep the default

![create_email_server](https://user-images.githubusercontent.com/33703873/100387399-49ce1600-3028-11eb-96d6-0614c389268b.gif)

1. **Connect account**
2. Choose your email
3. **Allow**
4. And finally hit **Create Service**

Under **Email Service** tab you will find your _Service ID_.

![serviceID](https://user-images.githubusercontent.com/33703873/100431036-e4b20900-3097-11eb-8c99-334666fe3884.png)

1. Copie it
2. Paste it into .env

```
REACT_APP_USER_ID=
REACT_APP_TEMPLATE_ID=
REACT_APP_SERVICE_ID=service_apg84ff (illustration only)
````

## Create an Email Tamplate

Under **Email Tamplate** tab:
1. _Create New Tamplate_
2. Make your changes but keep in mind that all the dynamic fields need to be between double curly braces

![Template_customization](https://user-images.githubusercontent.com/33703873/100431674-ca2c5f80-3098-11eb-974e-06d5ed4d5a52.png)

<br/>

3. **Save** it
4. Test it

![Custom_template](https://user-images.githubusercontent.com/33703873/100427957-8daa3500-3093-11eb-8112-a1da5a0842ef.gif)

5. Check your email box

![email_box](https://user-images.githubusercontent.com/33703873/100431782-eaf4b500-3098-11eb-9243-6331994c7353.png)

6. Check the template

![email_body](https://user-images.githubusercontent.com/33703873/100431815-f6e07700-3098-11eb-9412-8f6e84854840.png)

7. Once it is working, let's move on and **copie the _Template ID_** and...

![TemplateID](https://user-images.githubusercontent.com/33703873/100431881-0d86ce00-3099-11eb-94cb-9a201e78381b.png)

8. ...paste it in .env

```
REACT_APP_USER_ID=
REACT_APP_TEMPLATE_ID=template_ssdjfjj (illustration only)
REACT_APP_SERVICE_ID=service_apg84ff (illustration only)
````
<br/>
<br/>
