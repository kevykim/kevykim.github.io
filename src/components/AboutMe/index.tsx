import React from "react";

import './AboutMe.css'

interface ProfileImage {
    profileimg: string;
    alt: string;
}

const AboutMe : React.FC<ProfileImage> = ({profileimg, alt}) => {
    return (
        <div id="about">
            <div className="about_title">
                ABOUT 
            </div>
            <div className="about_div">
                <img className="about_image" src={profileimg} alt={alt}/>
                <div style={{width:'500px', height:"500px"}}>
                <p className="about_p">
                As a former educator turned software engineer, I've discovered a deep passion for building websites and apps from scratch, using a mix of logic and code to create beautiful, functional solutions.
                With a creative eye for design and a fascination for the endless possibilities of software development, I'm always looking for new challenges and ways to improve my skills.
                </p>
            
                <p className="about_p">
                After completing a rigorous 6-month software development bootcamp at App Academy, where I participated in over 1000 hours of lectures, paired programming, and projects, I honed my ability to learn quickly and efficiently, while also developing attributes of resilience, communication, and problem-solving.
                But even with this intensive training, I know that there is always more to learn and improve upon to become the best software engineer that I can be.
                </p>

                <p className="about_p">
                When I'm not coding, you can often find me hiking, snowboarding, or playing video games.
                I believe in a balanced lifestyle that combines hard work and play, and I'm always interested in meeting like-minded individuals who share my passions.
                </p>

                <p className="about_p">
                Feel free to reach out if you'd like to connect or learn more about my work. I look forward to hearing from you!
                </p>
                </div>
            </div>
        </div>
    )
}



export default AboutMe;