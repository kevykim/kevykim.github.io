import React from "react";
import './socials.css'

interface SocialProps {
    target : string;
}

const Socials : React.FC<SocialProps> = ({target}) => {

    return (
        <div id="socials">
            <div className="socials_title">
                Socials
            </div>
            <div id="socails_a_div">
                <a className="socials_a" href="mailto:kebonkim@gmail.com" target={target}><i className="fa-brands fa-google fa-2xl"></i></a>
				<a className="socials_a" href="https://www.linkedin.com/in/kevin-kim-a88429150/" target={target}><i className="fa-brands fa-linkedin fa-2xl"></i></a>
				<a className="socials_a" href="https://angel.co/u/kevin-kim-99" target={target}><i className="fa-brands fa-angellist fa-2xl"></i></a>
				<a className="socials_a" href="https://github.com/kevykim" target={target}><i className="fa-brands fa-github fa-2xl"></i></a>
				<a className="socials_a" href="https://docs.google.com/document/d/19daP8CcJ4QXC5EZuWnWLT7eJOEm8rvt7TAZOWhPWqPs/edit?usp=sharing˜" target={target}  rel="noreferrer"><i className="fa-solid fa-file fa-2xl"></i></a>
            </div>
        </div>
    )
};



export default Socials;