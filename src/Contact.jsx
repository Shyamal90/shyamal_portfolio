import React from 'react'
import './style/contact.css'
import Contact_Form from './Contact_Form';
import Contact_Details from './Contact_Details';

function Contact() {
    return (
        <>
            <div className='contact-container' id="contact">
                {/* <!--/ Section Contact-Footer Star /--> */}
                <Contact_Form className="margin-btw" />
                <Contact_Details className="margin-btw" />
                {/* <!--/ Section Contact-footer End /--> */}
            </div>
        </>

    )
}

export default Contact
