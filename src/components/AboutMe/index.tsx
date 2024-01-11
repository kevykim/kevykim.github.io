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
                <div className="about_p_div">
                <p className="">
                    Hi I'm Kevin! <span role="img">👋</span>
                </p>
                <p className="about_p">
                Transitioning from education to software engineering, I've developed a passion for crafting websites and apps with a mix of logic and code. My creative eye for design and fascination with software development's endless possibilities drive my constant pursuit of challenges and skill improvement.
                </p>
            
                <p className="about_p">
                After successfully completing a challenging 6-month software development bootcamp at App Academy, I engaged in volunteer initiatives like Chingu and Hack For LA, refining both my teamwork and technical skills.
                Additionally, my role as a Web Developer Intern at Mindhome offered hands-on exposure to full-stack development. This experience allowed me to improve web applications, enhance user experiences, and sharpen my coding abilities and industry knowledge.
                </p>

                <p className="about_p">
                When I'm not coding, you can often find me hiking, snowboarding, or playing video games.
                </p>

                <p className="about_p">
                Feel free to reach out if you'd like to connect. I look forward to hearing from you!
                </p>
                </div>
            </div>
        </div>
    )
}



export default AboutMe;