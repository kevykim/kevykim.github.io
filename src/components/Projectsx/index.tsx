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
        <div className="project_title">Projects</div>
        <div className="project_div">
          <div className="project_inner_div">
            <a>
              <p className="githubtext">Wintertrails</p>
            </a>
            <div className="project_card">
              <img className="project_image" src={project1} alt="project1" />

              <div className="overlay">
                <a
                  className="git_link"
                  href="https://winter-trails-capstone.herokuapp.com/"
                  target={target}
                >
                  <i className="fa-solid fa-link fa-3x"></i>
                </a>
                <a
                  className="git_link"
                  href="https://github.com/kevykim/CapStone-Project"
                  target={target}
                >
                  <i className="fa-brands fa-github fa-3x"></i>
                </a>
              </div>
            </div>
            {/* <p className="project_p">
              Full-stack clone of{" "}
              <a href="https://www.alltrails.com/">Alltrails</a>
            </p> */}
            {/* <p className="project_p">
              JavaScript | React | Redux | Python | Flask | SQLAlchemy | AWS
            </p> */}
          </div>

          <div className="project_inner_div">
            <p className="githubtext">Artsy</p>
            <div className="project_card">
              <img className="project_image" src={project2} alt="project2" />
              <div className="overlay">
                <a
                  className="git_link"
                  href="https://artsy-1014.herokuapp.com/"
                  target={target}
                >
                  <i className="fa-solid fa-link fa-3x"></i>
                </a>
                <a
                  className="git_link"
                  href="https://github.com/haiyen2003/Etsy-clone"
                  target={target}
                >
                  <i className="fa-brands fa-github fa-3x"></i>
                </a>
              </div>
            </div>
            {/* <p className="project_p">
              Full-stack clone of <a href="https://www.etsy.com/">Etsy</a>
            </p>
            <p className="project_p">
              JavaScript | React | Redux | Python | Flask | SQLAlchemy
            </p> */}
          </div>

          <div className="project_inner_div">
              <p className="githubtext">Airbb</p>
            <div className="project_card">
              <img className="project_image" src={project3} alt="project3" />
            <div className="overlay">
              <a
                className="git_link"
                href="https://backend-project-airbb.herokuapp.com/"
                target={target}
              >
                <i className="fa-solid fa-link fa-3x"></i>
              </a>
              <a
                className="git_link"
                href="https://github.com/kevykim/Airbb-project"
                target={target}
              >
                <i className="fa-brands fa-github fa-3x"></i>
              </a>
            </div>
          </div>
          {/* <p className="project_p">
              Full-stack clone of <a href="https://www.airbnb.com/">Airbnb</a>
              </p>
              <p className="project_p">
              JavaScript | React | Redux | Express | Sequelize
            </p> */}
            </div>
        </div>
      </div>
    );
}





export default Projects;