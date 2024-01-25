import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills: </b>
        {project.skills}
      </p>
      <div className="links">
        <GithubIcon onClick={() => window.open(project.githubLink)} />
        <a href={project.demoLink} target="_blank">
          Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
