import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateEmail(e.target.email.value) && e.target.name.value && e.target.message.value) {
			console.log(e.target.name.value, e.target.email.value, e.target.message.value);
            setFormState({ name: '', email: '', message:''});
            console.log('Form', formState);
			document.querySelector(".contact-form").reset();
        }
    };

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }  
       if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value });
       }
    }

    return (
        <section className="contact mb-5 w-50 m-auto">
            <h1 className="text-center">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea name="message" className="form-control" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
)}
            <button type="submit">Submit</button>
            </form>
            <br/>
            <hr/>
            <br/>
            <div>
                <h3>Other forms of communication:</h3>
                <br/>
                <p><b>Email:</b> BMArsenault@gmail.com</p>
                <p><b>Phone:</b> 860-830-4195</p>
                <br/>
                <br/>
            </div>
        </section>
    )
}
    
export default ContactForm;