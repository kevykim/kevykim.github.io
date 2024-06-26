import React from "react";

import './AboutMe.css'

interface ProfileImage {
    profileimg: string;
    alt: string;
}

const AboutMe : React.FC<ProfileImage> = ({profileimg, alt}) => {
    return (
      <div id="about">
        <div className="about_title">ABOUT</div>
        <div className="about_div">
          <img className="about_image" src={profileimg} alt={alt} />
          <div className="about_p_div">
            <p className="about_hi">Hi I'm Kevin!</p>
            <p className="about_p">
              Transitioning from education to software engineering, I've
              developed a passion for crafting websites and apps with a mix of
              logic and code. My creative eye for design and fascination with
              software development's endless possibilities drive my constant
              pursuit of challenges and skill improvement.
            </p>

            <p className="about_p">
              After successfully completing a challenging 6-month software
              development bootcamp at App Academy, I engaged in volunteer
              initiatives like Chingu and Hack For LA, refining both my teamwork
              and technical skills. Additionally, my internships at Prifina and
              Mindhome have offered hands-on experience in full-stack
              development. This experience allowed me to improve web
              applications, enhance user experiences, and sharpen my coding
              abilities as well as gain industry knowledge.
            </p>

            <p className="about_p">
              When I'm not coding, you can often find me hiking, snowboarding,
              or playing video games.
            </p>

            <p className="about_p">
              Feel free to reach out if you'd like to connect. I look forward to
              hearing from you!
            </p>
            <a
                className="resume_button"
              href="
                https://docs.google.com/document/d/19daP8CcJ4QXC5EZuWnWLT7eJOEm8rvt7TAZOWhPWqPs/edit?usp=sharing˜
                "
              target={"_blank"}
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    );
}



export default AboutMe;