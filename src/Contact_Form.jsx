import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/contact.css';
import emailjs from 'emailjs-com'

function Contact_Form() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_dkrgzxh', 'template_r6pxlbi', e.target, 'user_LFKKnzDP9rzEIzRC4oKtk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <div className='contact_form--container w-50'>

            <div className="heading">
                <h3>Send Message</h3>
                <hr className='underline' />
            </div>


            <form onSubmit={sendEmail}>
                <div class="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                    <input type="text" className="form-control" id="exampleFormControlInput1" required placeholder="Your Name" name='name' style={{
                        border: "1px solid #f5bd07",
                        outline: "#f5bd07"
                    }} />
                </div>
                <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
                    <input type="email" className="form-control" id="exampleFormControlInput1" required placeholder="Your Email" name='email' style={{
                        border: "1px solid #f5bd07",
                        outline: "#f5bd07"
                    }} />
                </div>
                <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
                    <input type="text" className="form-control" id="exampleFormControlInput1" required placeholder="Subject" name='subject' style={{
                        border: "1px solid #f5bd07",
                        outline: "#f5bd07"
                    }} />
                </div>
                <div className="mb-3">
                    {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" required placeholder='Message...' name='message' style={{
                        border: "1px solid #f5bd07",
                        outline: "#f5bd07"
                    }}></textarea>
                </div>
                {/* <button type="button" class="btn btn-primary btn-warning">Send Message</button> */}
                <div className="mb-3">
                    <input type="submit" value="Send Message" className='submitBtn' style={{ padding: "6px", backgroundColor: "#f5bd07" , borderRadius:"4px"}} />
                </div>
            </form>

        </div>
    )
}

export default Contact_Form
