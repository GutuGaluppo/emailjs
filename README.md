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

7. Once it is working, let's move on and **copy the _Template ID_** and...

![TemplateID](https://user-images.githubusercontent.com/33703873/100431881-0d86ce00-3099-11eb-94cb-9a201e78381b.png)

8. ...paste it into .env

```
REACT_APP_USER_ID=
REACT_APP_TEMPLATE_ID=template_ssdjfjj (illustration only)
REACT_APP_SERVICE_ID=service_apg84ff (illustration only)
````
<br/>
<br/>

The only thing we miss now is the _**User ID**_\
Under **Integration** you will find you _User ID_ in the **API keys**

![userID](https://user-images.githubusercontent.com/33703873/100435683-93594800-309e-11eb-9769-63366f3fadc0.png)

1. Copy it and paste it into .env

```
REACT_APP_USER_ID=user_rvO45qERpsasXdzOC3 (illustration only)
REACT_APP_TEMPLATE_ID=template_ssdjfjj (illustration only)
REACT_APP_SERVICE_ID=service_apg84ff (illustration only)
````

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
	box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35), 12px 0 20px -12px rgba(0, 0, 0, 0.35);
     }
}
```
## Now, restart your server so React can gather all the information from the _.env_ file.

