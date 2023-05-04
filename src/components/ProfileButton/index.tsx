import React, { useState , useEffect, useRef } from "react";
import './profile.css'



const ProfileButton : React.FC = () =>  {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    // Keep track of menu within every render;
    let menuRef = useRef<HTMLDivElement>(null);

    const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    };

    const closeM = () => {
        setShowMenu(false)
    }

    useEffect(() => {

    const closeMenu = (event:any) => {
        if (!menuRef.current?.contains(event.target)) {
            setShowMenu(false)
        }
    };

    document.addEventListener("mousedown", closeMenu);

    return () => {document.removeEventListener("mousedown", closeMenu)};
  }, [showMenu]);

    return (
        <div className="profile_div">

          <div className="side_a_container">
        <button className="profile_button" onClick={openMenu}> <i
            className="fa-solid fa-bars fa-2xl"
          ></i> </button>
        <a className="side_a" href="mailto:kebonkim@gmail.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-google fa-2xl"></i></a>
				<a className="side_a" href="https://www.linkedin.com/in/kevin-kim-a88429150/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
				<a className="side_a" href="https://angel.co/u/kevin-kim-99" target="_blank" rel="noreferrer"><i className="fa-brands fa-angellist fa-2xl"></i></a>
				<a className="side_a" href="https://github.com/kevykim" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-2xl"></i></a>
				<a className="side_a" href="assets/Kim Kevin Resume.pdf" target="_blank" rel="noreferrer"><i className="fa-solid fa-file fa-2xl"></i></a>
          </div>

        {showMenu && <div className="menu_div" ref={menuRef}>
            <div>
                <a className="link_tags" href="#about" onClick={closeM} >about</a>
            </div>
            <div>
                <a className="link_tags" href="#projects" onClick={closeM} >projects</a>
            </div>
            <div>
                <a className="link_tags" href="#skills" onClick={closeM} >skills</a>
            </div>
            <div>
                <a className="link_tags" href="#socials" onClick={closeM} >socials</a>
            </div>
            </div>}

            </div>
    );
}




export default ProfileButton;