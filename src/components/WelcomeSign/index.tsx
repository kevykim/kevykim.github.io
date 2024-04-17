import React from "react";
import './WelcomeSign.css'
import ProfileButton from "../ProfileButton";


interface ImageProps {
  src: string;
  alt: string;
  profileimg?: string;
  width?: number;
  height?: number;
}



const WelcomeSign : React.FC<ImageProps> = ({src, alt}) => {
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <ProfileButton />
            <img className="welcome_image" src={src} alt={alt}/>
            <div className="welcome_text">
                <div className="profile_image_div">
                    <div style={{display:'flex', width: '600px', flexDirection: 'column'}}>
                        <div style={{display:'flex', flexDirection: 'row'}}>
                        <div className="hi">H</div>
                        <div className="hi">i,</div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div className="hi">I</div>
                        <div className="hi">'</div>
                        <div className="hi">m&nbsp;</div>
                        <div className="hi">K</div>
                        <div className="hi">e</div>
                        <div className="hi">v</div>
                        <div className="hi">i</div>
                        <div className="hi">n&nbsp;</div>
                         <div className="hi">K</div>
                        <div className="hi">i</div>
                        <div className="hi">m</div>
                        </div>
                        <div>&nbsp;</div>
                    </div>
                {/* <img className="profile_image" src={avatarImg} alt="avatar"/> */}
                    <div className="profile_con_text">
                    <div id="console">console<span id="period">.</span><span id="log">log</span><span className="parenthis">(</span>
                    </div>
                    <div className="parenthis">);</div>
                    </div>
                <div className="profile_text_div">
                    <div className="profile_inner">"Software Engineer"</div>
                    <div className="profile_inner">"Frontend Engineer"</div>
                    <div className="profile_inner">"Fullstack Engineer"</div>
                </div>
                </div>
            </div>
        </div>
    )
};



export default WelcomeSign;
