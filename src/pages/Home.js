import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";
import Pdf from "../documents/Resume.pdf";
import Dressup from "../dressup/dressup";
import Courses from "./Courses";
import { BorderTop } from "@material-ui/icons";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, I'm Seojun Chung</h2>
        <div className="prompt">
          <p>
            Software developer with a passion and ambition for designing and
            creating.
          </p>
          <div className="links">
            <a href={Pdf} target="_blank">
              Resume
            </a>
            <LinkedInIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/seojun-chung-aa3067252/",
                  "_blank"
                )
              }
            />
            <GithubIcon
              onClick={() => window.open("https://github.com/seojungood")}
            />
            <EmailIcon
              onClick={() => window.open("mailto:seojungood@gmail.com")}
            />
          </div>
        </div>
      </div>

      <Dressup />

      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Programming Languages</h2>
            <span>
              JavaScript, TypeScript, Java, C/C++, C#, HTML, CSS, Python,
              Kotlin, SQL
            </span>
          </li>
          <li className="item">
            <h2>Libraries & Frameworks</h2>
            <span>React.js, Tailwind CSS</span>
          </li>
          <li className="item">
            <h2>Tools & Platforms</h2>
            <span>
              Unity, Tableau, Tableau Prep, Firebase, MySQL, Docker, Qt Creator,
              Android Studio
            </span>
          </li>
        </ol>
      </div>

      <div className="skills" style={{ borderTop: "1px solid gray" }}>
        <h2>Related Courseworks</h2>
      </div>

      <Courses />
    </div>
  );
}

export default Home;
