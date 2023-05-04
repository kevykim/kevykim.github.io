import React from "react";


import './Projects.css'

interface ProjectImage {
    project1 : string;
    project2 : string;
    project3 : string;
    target: string;
}

const Projects : React.FC<ProjectImage> = ({project1, project2, project3, target}) => {

    return (
        <div id="projects">
            <div className="project_title">
                Projects
            </div>
            <div className="project_div">
                <div className="project_inner_div">
					<a className="git_link"  href="https://github.com/kevykim/CapStone-Project" target={target}><p className="githubtext" >Wintertrails&nbsp; <i className="fa-brands fa-github"></i></p></a>
                    <a href='https://winter-trails-capstone.herokuapp.com/' target={target}>
                <img className="project_image" src={project1} alt="project1"/>
                    </a>
                    <p className="project_p">Inspired by AllTrails</p>
					<p className="project_p">JavaScript | React | Redux | Python | Flask | SQLAlchemy | AWS</p>
                </div>
                <div className="project_inner_div">
					<a className="git_link"  href="https://github.com/haiyen2003/Etsy-clone" target={target}><p className="githubtext" >Artsy&nbsp; <i className="fa-brands fa-github"></i></p></a>
                    <a href="https://artsy-1014.herokuapp.com/" target={target}>
                <img className="project_image" src={project2} alt="project2"/>
                    </a>
                    <p className="project_p">Inspired by Etsy</p>
					<p className="project_p">JavaScript | React | Redux | Python | Flask | SQLAlchemy</p>
                </div>
                <div className="project_inner_div">
					<a className="git_link"  href="https://github.com/kevykim/Airbb-project" target={target}><p className="githubtext" >Airbb&nbsp; <i className="fa-brands fa-github"></i></p></a>
                    <a href="https://backend-project-airbb.herokuapp.com/" target={target}>
                <img className="project_image" src={project3} alt="project3"/>
                    </a>
                    <p className="project_p">Inspired by Airbnb</p>
					<p className="project_p">JavaScript | React | Redux | Express | Sequelize</p>
                </div>
            </div>
        </div>
    )
}





export default Projects;