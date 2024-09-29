import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return (
    <main className='contact-main'>
        <h1>Contact Us</h1>

    <form action="?">
        <div className='name'>
            <div  className='f-name'>
                <label htmlFor="first-name">Name</label>
                <input type="text" name="first-name" id="first-name" />
            </div>
            <div className='l-name'>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" id="last_name" />
            </div>
        </div>

        <div className='form-element'>
            <label htmlFor="email">Email Addres(required)</label>
            <input type="email" name="email" id="email" />
        </div>

        <div className='form-element'>
            <label htmlFor="subject">Subject(required)</label>
            <input type="text" name="subject" id="subject" />
        </div>

        <div className='form-element'>
            <label htmlFor="message">Message(required)</label>
            <textarea  name="message" id="message"></textarea>
        </div> 
        
        <button className='submit-button'>SUBMIT</button>
    </form>
    </main>
  )
}

export default ContactForm