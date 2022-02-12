import React from 'react';
import './style/About.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function About() {
    return (
        <>
            <section className='about-section' id='about'>
                <div className="text-center">
                    <h4 className="display-5">About Me.</h4>
                    <hr className='w-75 mx-auto' />
                </div>

                <div className="container about-container w-75 mx-auto">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                            <img src="image/bg-2.jpg" alt="profile image" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 col-xxl-6">

                            {/* <ul className='about-contact'>
                                <li className='about-contact_item'><span className='about-contact_heading'>Name :</span> Shyamal Sardar</li>
                                <li className='about-contact_item'><span className='about-contact_heading'>Profile:</span>  Full Stack Developer</li>
                                <li className='about-contact_item'><span className='about-contact_heading'>Email : </span>shyamalsardar90@gmail.com</li>
                                <li className='about-contact_item'><span className='about-contact_heading'>Phone : </span>9735627576 / 9635022024</li>
                                <strong></strong>
                            </ul> */}
                            <div className="about_me">
                                <d4>Hi everyone, I am  <strong>Shyamal Sardar</strong> from <strong>West Bengal, India</strong>.
                                    <br/><br/>
                                    A motivated full-stack developer with in-depth knowledge of  <strong>JavaScript</strong>,<strong>React</strong> , <strong>Express</strong>,<strong>Node.js</strong> , <strong>MongoDB </strong>and development tools. Excited to learn new technologies. Believe in <strong>team building</strong> and leading with effective communication.
                                    <br/><br/>
                                    Beside from coding , I have interest in <strong>reading self improvemet book</strong>, playing cricket , football
                                    </d4>
                            </div>

                            {/* <div className="about_myskills">
                                <h3>Skills</h3>
                                <ul className='about_myskill__logoes'>
                                    <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="skill-img" className='skill_img'/></li>
                                    <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="skill-img" className='skill_img'/></li>
                                    <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="skill-img" className='skill_img'/></li>
                                    <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="skill-img" className='skill_img'/></li>
                                    <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="skill-img" className='skill_img'/></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                    <div className="row">

                    </div>
                </div>
            </section>

            {/* header section */}
            {/* body section */}
            {/* body section has two part - 1. About Me 2. Profile Pic */}

        </>

    )
}

export default About


/*
<h1 className="m-auto heading ">Hello I am full Stack Developer</h1>
            <div className='container col-lg about mh-100'>

                <div className="row header">

                </div>
                <div className="row">
                    <div className="col">
                        <h3>Hey, I am Shyamal,a full stack devloper from India. I enjoy creating user-centric, delightful and human experiences website </h3>
                    </div>
                    <div className="col">
                        <img src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="profile-pic" />
                    </div>
                </div>


*/