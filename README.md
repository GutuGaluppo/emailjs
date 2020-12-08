# Simple React form using EmailJS.

<br/>
<hr>

### First instructions

On this tutorial we gonna use two main tools

1.**Terminal**

<img width="127" alt="iTerm_icon" src="https://user-images.githubusercontent.com/33703873/100464344-bcdd9800-30cd-11eb-9a6b-bbaf76a06589.png">

2.**VSC** _(Visual Studio Code)_

<img width="125" alt="VSC_icon" src="https://user-images.githubusercontent.com/33703873/100464524-11811300-30ce-11eb-83db-e9952c09cf34.png">

#### IMPORTANTE
Every command prefix with **$** (dolar sign) needs to be run into the **terminal** \
(**without** the **$**)

<br/>
<hr>
<br/> 

# Let's get it started

Open your **Terminal** and in the project directory, you can run:

##### 1. `$ npx create-react-app emailjs-tutorial`

>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for >production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine.

<p align="center">
	<img alt="npx_create_app" src="https://user-images.githubusercontent.com/33703873/100601148-85a3fc80-3302-11eb-938f-e68fffd482cb.gif">
</p>

##### 2. `cd emailjs-tutorial`
##### 3. `$ npm start`

<p align="center">
	<img alt="npm-start" src="https://user-images.githubusercontent.com/33703873/100598549-2e505d00-32ff-11eb-9b98-b10391d7c273.gif">
</p>

It might open your app running on `localhost:3000` automaticly

<p align="center">
	<img alt="app-local" src="https://user-images.githubusercontent.com/33703873/100598465-0a8d1700-32ff-11eb-86b8-95d8c10af208.gif">
</p>

if not, \
open click on the link [http://localhost:3000](http://localhost:3000) to view it in the browser.

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
    

## Create the .env file in the root of your project
Paste the snippet into it

`.env`

    REACT_APP_SERVICE_ID=
    REACT_APP_TEMPLATE_ID=    
    REACT_APP_USER_ID=

    
Once we create the app with _create-react-app_ we need to prefix every _environment variable_ with **REACT_APP_**

## Install _dotenv_
[dotenv](https://www.npmjs.com/package/dotenv)
 

##### `$ npm install dotenv`

>**Dotenv** is a zero-dependency module that loads [environment variables](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use->them-f602f66d15fa) from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App >methodology.

<br/>
<hr>
<br/>
    
### Head over [emailjs.com](https://www.emailjs.com/docs/examples/reactjs/) and create an account (or Sing in)

Go to **Email Services** and _Add New Service_

<p align="center">
	<img alt="add_email_service" src="https://user-images.githubusercontent.com/33703873/100430576-47ef6b80-3097-11eb-98e1-b59316d171f8.png">
</p>

<br />
<br />

Choose an email service (in this case I'm going to use Gmail)

<p align="center">
	<img alt="email_service_opt" src="https://user-images.githubusercontent.com/33703873/100430900-addbf300-3097-11eb-8e69-89dcac4ee91c.png">
</p>

<br />
<br />

You can change its name or keep the default

<p align="center">
	<img alt="create_email_server" src="https://user-images.githubusercontent.com/33703873/100387399-49ce1600-3028-11eb-96d6-0614c389268b.gif">
</p>


1. **Connect account**
2. Choose your email
3. **Allow**
4. And finally hit **Create Service**

Under **Email Service** tab you will find your _Service ID_.

<p align="center">
	<img alt="serviceID" src="https://user-images.githubusercontent.com/33703873/100431036-e4b20900-3097-11eb-8c99-334666fe3884.png">
</p>

1. Copie it
2. Paste it into .env

```
REACT_APP_SERVICE_ID=service_apg84ff (illustration only)
REACT_APP_TEMPLATE_ID=
REACT_APP_USER_ID=
````

* [x] Service ID
* [ ] Template ID
* [ ] User ID

## Create an Email Tamplate

Under **Email Tamplate** tab:
1. _Create New Tamplate_
2. Make your changes but keep in mind that all the dynamic fields need to be between double curly braces

<p align="center">
	<img alt="Template_customization" src="https://user-images.githubusercontent.com/33703873/100431674-ca2c5f80-3098-11eb-974e-06d5ed4d5a52.png">
</p>

<br/>

3. **Save** it
4. Test it

<p align="center">
	<img alt="Custom_template" src="https://user-images.githubusercontent.com/33703873/100427957-8daa3500-3093-11eb-8112-a1da5a0842ef.gif">
</p>

<br/>

5. Check your email box

<p align="center">
	<img alt="email_box" src="https://user-images.githubusercontent.com/33703873/100431782-eaf4b500-3098-11eb-9243-6331994c7353.png">
</p>

<br/>

6. Check the template

<p align="center">
	<img alt="email_body" src="https://user-images.githubusercontent.com/33703873/100431815-f6e07700-3098-11eb-9412-8f6e84854840.png">
</p>

<br/>

7. Once it is working, let's move on and **copy the _Template ID_** and...

<p align="center">
	<img alt="templateID_settings" src="https://user-images.githubusercontent.com/33703873/100446732-9b6db380-30af-11eb-8f5d-19a2fd065428.png">
</p>

<br/>

8. ...paste it into .env

```
REACT_APP_USER_ID=
REACT_APP_TEMPLATE_ID=template_ssdjfjj (illustration only)
REACT_APP_SERVICE_ID=service_apg84ff (illustration only)
````
* [x] Service ID
* [x] Template ID
* [ ] User ID

<br/>
<br/>

The only thing we miss now is the _**User ID**_\
Under **Integration** you will find your _User ID_ in the **API keys**

<p align="center">
	<img alt="userID" src="https://user-images.githubusercontent.com/33703873/100435683-93594800-309e-11eb-9769-63366f3fadc0.png">
</p>

1. Copy it and paste it into .env

```
REACT_APP_USER_ID=user_rvO45qERpsasXdzOC3 (illustration only)
REACT_APP_TEMPLATE_ID=template_ssdjfjj (illustration only)
REACT_APP_SERVICE_ID=service_apg84ff (illustration only)
````
* [x] Service ID
* [x] Template ID
* [x] User ID

<br/>
<br/>

# Importing our dependencies

`src > Contact.js`

```
import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
require('dotenv').config();
```

1. Create variables to store your enviroment variables

```
const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;
```

2. Replace the paramaters from _sendForm_ with your created variables

```
emailjs.sendForm(
 serviceID,
 templateID,
 e.target,
 userID
)
```

3. Change our **form** a little

```
return (
 <div className="form_wrapper">
  <form onSubmit={sendEmail}>
   <label>Name</label>
   <input type="text" name="from_name" placeholder="Jack Sparrow"/>
   <label>Email</label>
   <input type="email" name="user_email" placeholder="sparrow@email.com"/>
   <label>Phone</label>
   <input type="phone" name="phone" placeholder="987654321"/>
   <label>Subject</label>
   <input type="text" name="subject" placeholder="Black pearl"/>
   <label>Message</label>
   <textarea name="message" rows="5" placeholder="Wherever we want to go, we'll go"/>
   <input type="submit" value="Submit" className="btn"/>
  </form>
 </div>
);
```
Your _Contact.js_ should look like this

```
import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
require('dotenv').config();

 export default function Contact() {
   const serviceID = process.env.REACT_APP_SERVICE_ID;
   const templateID = process.env.REACT_APP_TEMPLATE_ID;
   const userID = process.env.REACT_APP_USER_ID;

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
	  <label>Name</label>
	  <input type="text" name="from_name" placeholder="Jack Sparrow"/>
	  <label>Email</label>
	  <input type="email" name="user_email" placeholder="sparrow@email.com"/>
	  <label>Phone</label>
	  <input type="phone" name="phone" placeholder="987654321"/>
	  <label>Subject</label>
	  <input type="text" name="subject" placeholder="Black pearl"/>
	  <label>Message</label>
	  <textarea name="message" rows="5" placeholder="Wherever we want to go, we'll go"/>
	  <input type="submit" value="Submit" className="btn"/>
	</form>
    </div>
  );
}
```

4. Create a _Contact.css_ into _src_ folder so we can make it "less ugly" :stuck_out_tongue_winking_eye:

`src > Contact.css`

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  width: 20vw;
  height: 40px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 15px;
}

label {
  align-self: flex-start;
  text-decoration: underline;
}

*:focus {
  outline: none;
  box-shadow: 0 5px 10px rgba(170, 0, 255, 0.2);
}

.btn {
  max-width: 8vw;
  font-size: 1rem;
  background: rgb(27, 255, 6);
  border: none;
  cursor: pointer;
}

.btn:hover {
  animation: btn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

textarea {
  min-width: 20vw;
  margin: 10px auto;
  padding: 10px;
  border: 2px solid;
  border-radius: 15px;
}


@keyframes btn {
  0% {
	transform: translateZ(0);
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
     }
  100% {
	transform: translateZ(50px);
	box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35),
	12px 0 20px -12px rgba(0, 0, 0, 0.35);
     }
}
```
**RESTART your server** so _**React**_ can gather all the information from the _.env_ file.
and :star2: _VOILA_ :star2: :dancer:

<br/>

<p align="center">
	<img width="350" alt="Form" src="https://user-images.githubusercontent.com/33703873/100445601-a9bad000-30ad-11eb-9d61-e3bed255791b.png">
</p>

### Time to test

## Aurevoire
