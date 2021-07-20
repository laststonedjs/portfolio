import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import facebook from './../../assets/in.png';


const Contact = () => {
    return (
    <div className="section-container">
         <Header heading="Get in touch."
                details="Interested to collaborate? Feel free to drop me an email."
                    />

            {/* Social icons */}

            <div className="social-icon-container">
                <a href="https://github.com/laststonedjs" className="social-icon">
                    <img src={github} alt="social" />
                </a>
                <a href="https://www.linkedin.com/in/filip-sarovic-4376a61a1/" className="social-icon">
                    <img src={linkedin} alt="social" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100003626033475" className="social-icon">
                    <img src={facebook} alt="social" />
                </a>
                
                
            </div>

            <FooterLink phrase="Read more "
                        toAddress="/about"
                        link="about me."
                        />

    <div className="vector-frame">
        <img src={contactVector} alt="vector" className="about-vector" />
    </div>
        </div>
    );
};

export default Contact;