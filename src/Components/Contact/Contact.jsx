import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
        <form>
            <h2>Contact Form</h2>
            <div className="input-box">
                <label>Full Name</label>
                <input type="text" className="field"/>
            </div>
        </form>
    </section>
  )
}

export default Contact
