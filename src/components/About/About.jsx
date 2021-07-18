import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className="section-container">
            <Header
                heading="About Me."
                details="Frontend Web Developer | Web Designer "
            />  


                <div className="about-main">

                    <div className="about-main-left">

                        <h3 className="about-sub-head">Junior Web Developer</h3>
                        <p className="about-details">
                        During learning programming I developed frontend skill the most which mean I used Angular and React for frontend part in building apps. 
                       
                        <a className="about-link-element" 
                        href="https://github.com/laststonedjs">
                        <br />    My Learning Projects on GitHub
                        </a>
                        </p>

                        <h3 className="about-sub-head">Web Designer</h3>
                        <p className="about-details">
                        On my one year education schooling I learned how to use Adobe Photoshop, Illustrator and Animate for manipulation and practice on images and videos.
                      
                        <a className="about-link-element" 
                        href="https://www.linkedin.com/in/filip-sarovic-4376a61a1/">
                        <br />   Some of my works can be found here
                        </a>
                        </p>

                    </div>

                    <div className="about-main-right">
                            <img className="about-anime"
                                src={aboutAnime}
                                alt="animation" />
                    </div>
                </div>


                <FooterLink
                    phrase="Check out my "
                    link="projects!"
                    toAddress="/projects"
                    />
                {/* Vector Frame */}
                <div className="vector-frame">
                    <img src={aboutVector} 
                        className="about-vector"
                        alt="about"
                        />
                    </div>     
                </div>
    );
};

export default About;