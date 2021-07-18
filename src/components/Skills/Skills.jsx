import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Skills.css';


const Skills = () => {
    return (
        <div className="section-container">
           <Header 
           heading="My Skills"
           details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
            />

            <FooterLink phrase="Get in"
                        link="touch."
                        toAddress="/contact"
                        />
           </div>
    );
};

export default Skills;