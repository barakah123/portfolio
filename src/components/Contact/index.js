import './index.scss'
import React from 'react'

const Contact = () => {

const handleSubmit = (e) => {
    e.preventDefault();
    window.alert('This form is submitted...');
}

  return (
    <div className='container contact-page'>
         <h1>Contact me</h1>
         <p>I am interested in freelance opportunities.
            Contact me by using the below form if you have other question or request
         </p>
         <div className='contact-form'>
              <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <input type='text' name='name' placeholder='Name' required />
                    </li>
                    <li>
                        <input type='email' name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input placeholder='Subject' type='text' name='subject'  required />
                    </li>
                    <li>
                        <textarea
                            placeholder='Message' name='message' required>
                        </textarea>
                    </li>
                    <li>
                        <input type='submit' className='button' value='SEND'/>
                    </li>
                </ul>
            </form>
         </div>
         <div className='info'>
            Issa Barakat, <br/> Lagos, Nigeria <br/>
            <span>issabarakatb@gmail.com</span>
         </div>
    </div>
  )
}

export default Contact