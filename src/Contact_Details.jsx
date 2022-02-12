import React from 'react'
import './style/contact.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';

function Contact_Details() {
    return (
        <div className='contact_details--container'>
            <div className="heading">
                <h3>Get in Touch</h3>
                <hr className='underline' />
            </div>
            <div class="card" style={{ width: "18rem", height: "225px", border: "1px solid #f5bd01" }}>
                <div class="card-body">

                    <div className="contactIcons">
                        <p><LocationOnIcon color="warning"></LocationOnIcon><span className='contact_Inform'>Kolkata,West Bengal</span></p>
                        <p><CallIcon color="warning"></CallIcon><span className='contact_Inform'>9735627576 / 9635022024</span></p>
                        <p><EmailOutlinedIcon color="warning"></EmailOutlinedIcon><span className='contact_Inform'>shyamalsardar90@gmail.com</span></p>
                    </div>

                    <div id="contactLogo">
                        <IconButton><a href="https://github.com/Shyamal90"><GitHubIcon className="scocialIcon" /></a></IconButton>
                        <IconButton> <a href="https://www.linkedin.com/in/shyamal-sardar-335521176/"><LinkedInIcon className="scocialIcon" /></a></IconButton>
                        <i class="bi bi-github"></i>
                    </div>
                    
                 </div>
            </div>
        </div>
    )
}

export default Contact_Details


