import React from "react";
import "./skills.css";
import 'animate.css'

const Skills: React.FC = () => {
  return (
    <div id="skills">
      <div className="skills_title">Skills</div>
      <div className="skills_icons">
        <div className="skills_icons_col">
          <a
            href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
            target="_blank"
            rel="noopener noreferrer"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=js"
              alt="skills"
            />
            <h2>JavaScript</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=html"
              alt="skills"
            />
            <h2>HTML</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.figma.com/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=figma"
              alt="skills"
            />
            <h2>Figma</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nodejs.org/en"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=nodejs"
              alt="skills"
            />
            <h2>NodeJS</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.heroku.com/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=heroku"
              alt="skills"
            />
            <h2>Heroku</h2>
          </a>
        </div>

        <div className="skills_icons_col">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.typescriptlang.org/"
            className="skills_icons_card"
          >
            <img
              className="skills_image_1"
              src="https://skillicons.dev/icons?i=ts"
              alt="skills"
            />
            <h2>TypeScript</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            className="skills_icons_card"
          >
            <img
              className="skills_image_1"
              src="https://skillicons.dev/icons?i=css"
              alt="skills"
            />
            <h2>CSS</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.python.org/"
            className="skills_icons_card"
          >
            <img
              className="skills_image_1"
              src="https://skillicons.dev/icons?i=py"
              alt="skills"
            />
            <h2>Python</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.postgresql.org/"
            className="skills_icons_card"
          >
            <img
              className="skills_image_1"
              src="https://skillicons.dev/icons?i=postgres"
              alt="skills"
            />
            <h2>PostgresSQL</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://git-scm.com/"
            className="skills_icons_card"
          >
            <img
              className="skills_image_1"
              src="https://skillicons.dev/icons?i=git"
              alt="skills"
            />
            <h2>Git</h2>
          </a>
        </div>

        <div className="skills_icons_col">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://react.dev/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=react"
              alt="skills"
            />
            <h2>React</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tailwindcss.com/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=tailwind"
              alt="skills"
            />
            <h2>Tailwind</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://flask.palletsprojects.com/en/3.0.x/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=flask"
              alt="skills"
            />
            <h2>Flask</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sequelize.org/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=sequelize"
              alt="skills"
            />
            <h2>Sequelize</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.postman.com/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=postman"
              alt="skills"
            />
            <h2>Postman</h2>
          </a>
        </div>

        <div className="skills_icons_col">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://redux.js.org/"
            className="skills_icons_card"
          >
            <img
              className="skills_image_1"
              src="https://skillicons.dev/icons?i=redux"
              alt="skills"
            />
            <h2>Redux</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs.org/"
            className="skills_icons_card"
          >
            <img
              className="skills_image_1"
              src="https://skillicons.dev/icons?i=nextjs"
              alt="skills"
            />
            <h2>NextJS</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://expressjs.com/"
            className="skills_icons_card"
          >
            <img
              className="skills_image_1"
              src="https://skillicons.dev/icons?i=express"
              alt="skills"
            />
            <h2>ExpressJS</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.sqlite.org/"
            className="skills_icons_card"
          >
            <img
              className="skills_image_1"
              src="https://skillicons.dev/icons?i=sqlite"
              alt="skills"
            />
            <h2>SQLite</h2>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.docker.com/"
            className="skills_icons_card"
          >
            <img
              className="skills_image_1"
              src="https://skillicons.dev/icons?i=docker"
              alt="skills"
            />
            <h2>Docker</h2>
          </a>
        </div>

        <div className="skills_icons_col">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vitejs.dev/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=vite"
              alt="skills"
            />
            <h2>Vite</h2>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://getbootstrap.com/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=bootstrap"
              alt="skills"
            />
            <h2>Bootstrap</h2>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://code.visualstudio.com/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=vscode"
              alt="skills"
            />
            <h2>VSCode</h2>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.npmjs.com/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=npm"
              alt="skills"
            />
            <h2>NPM</h2>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://aws.amazon.com/"
            className="skills_icons_card"
          >
            <img
              className="skills_image"
              src="https://skillicons.dev/icons?i=aws"
              alt="skills"
            />
            <h2>AWS</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
