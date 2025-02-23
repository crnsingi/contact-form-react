import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
        <form>
            <h2>Contact Form</h2>
            <div className="input-box">
                <label>Full Name</label>
                <input type="text" className="field" placeholder='Enter your name' required/>
            </div>
            <div className="input-box">
                <label>Email Address</label>
                <input type="email" className="field" placeholder='Enter your email' required/>
                </div>
            
        </form>
    </section>
  )
}

export default Contact
