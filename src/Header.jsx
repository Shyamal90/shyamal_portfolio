import React from "react";
// import PersonIcon from '@material-ui/icons/Person';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import { init } from 'ityped';
import { useEffect} from "react";
import Typical from 'react-typical';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Style.css";
import './Header.css';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';


const Header = () => {

    



    return (
        <>
            {/* <h1>Hello guys !! you are awesome 🚀🚀🚀</h1> */}
            <nav className="header flex table-hover">
                <div id="logo">
                    <img src="./logo/logo.png" alt="logo"/>
                </div>
                <div>
                    <ul className="menu flex">
                        <li><a href="#about" className="navLinks">About</a></li>
                        <li><a href="#skills" className="navLinks">Skills</a></li>
                        <li><a href="#projects" className="navLinks">Projects</a></li>
                        <li><a href="#contact" className="navLinks">Contact</a></li>
                    </ul>
                </div>
                <div id="contactLogo">
                   <IconButton><a href="https://github.com/Shyamal90"><GitHubIcon className="scocialIcon"/></a></IconButton>
                   <IconButton> <a href="https://www.linkedin.com/in/shyamal-sardar-335521176/"><LinkedInIcon className="scocialIcon"/></a></IconButton>
                   {/* <i class="bi bi-github"></i> */}
                </div>

            </nav>

            <banner class="banner-Container flex">

                <div className="leftBanner">
                    <h5>Welcome to my portfolio website!</h5>
                    <h1>Hey folks, I'm   </h1>
                    <span className="typical-heading"><Typical 
                            steps={['Shyamal Sardar',1000,'Full Stack Devloper',1000,'Frontend Designer',1000]}
                            loop = {Infinity}
                        /></span>
                    <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                    <p style={{color:"#FFC200"}}><span> <MarkEmailReadOutlinedIcon/> </span>shyamalsardar90@gamil.com | <span><PhoneAndroidOutlinedIcon/> </span>9735627576</p>
                    <a href="https://drive.google.com/file/d/1fqcLCRYEFlJHM_q5PNEhEKzICZK-eKbd/view?usp=sharing" target="_blank">
                      <button type="button" className="btn1 btn btn-warning">Download Resume</button>
                    </a>
                    
                    {/* <button className="btn2">Get a free quote</button>download="Resume resume.png" image/resume.png*/}

                </div>



                <div className="rightBanner">
                    <img src="./image/bannerImg.svg" alt="image Loading" />
                </div>
            </banner>

            
        </>
    )

}

export default Header;