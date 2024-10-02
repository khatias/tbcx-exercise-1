import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return (
    <main >
        <div className='container'>
            <div className='contact-form-container'>
                <form className='contact-form' action="?">
                    <h1>Contact Us</h1>
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

                    <div className='contact-form-element'>
                        <label htmlFor="email">Email Addres(required)</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className='contact-form-element'>
                        <label htmlFor="subject">Subject(required)</label>
                        <input type="text" name="subject" id="subject" />
                    </div>

                    <div className='contact-form-element'>
                        <label htmlFor="message">Message(required)</label>
                        <textarea  name="message" id="message"></textarea>
                    </div> 
                    
                    <button className='contact-submit-button'>SUBMIT</button>
                </form>
                <p className='contact-note'>
                     If you prefer to call, please reach out to us at (123) 456-7890.
                 </p>
            </div>
        </div>
    </main>
  )
}

export default ContactForm