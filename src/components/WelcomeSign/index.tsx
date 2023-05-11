import React from "react";
import './WelcomeSign.css'
import ProfileButton from "../ProfileButton";

import avatarImg from '../../assets/images/avatar.png'

interface ImageProps {
  src: string;
  alt: string;
  profileimg?: string;
  width?: number;
  height?: number;
}



const WelcomeSign : React.FC<ImageProps> = ({src, alt, profileimg, width, height}) => {
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <ProfileButton />
            <img className="welcome_image" src={src} alt={alt}/>
            {/* <div style={{width: "100%", height:'500px'}}></div> */}
            <div className="welcome_text">
                <div className="profile_image_div">
                    <div style={{display:'flex'}}>
                        <div className="hi">H</div>
                        <div className="hi">i</div>
                        <div>&nbsp;</div>
                        <div className="hi">I</div>
                        <div className="hi">'</div>
                        <div className="hi">m</div>
                        <div>&nbsp;</div>
                        <div className="hi">K</div>
                        <div className="hi">e</div>
                        <div className="hi">v</div>
                        <div className="hi">i</div>
                        <div className="hi">n</div>
                    </div>
                <img className="profile_image" src={avatarImg} alt="avatar"/>
                    <div className="profile_con_text">
                    <div id="console">console<span id="period">.</span><span id="log">log</span><span className="parenthis">(</span>
                    </div>
                    <div className="parenthis">);</div>
                    </div>
                <div className="profile_text_div">
                    <div className="profile_inner">"Software Engineer"</div>
                    <div className="profile_inner">"Frontend Engineer"</div>
                    <div className="profile_inner">"Nature Enthusiast"</div>
                    <div className="profile_inner">"Problem-Solver"</div>
                </div>

                </div>
            {/* <div>
            <div className="">Software Engineer</div>
            <div></div>
            </div> */}
            </div>
        </div>
    )
};



export default WelcomeSign;
