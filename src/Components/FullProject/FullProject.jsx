import React from "react";
import "./FullProject.css";
import { useParams, projectList } from "../../imports.jsx";

const FullProject = () => {
  const { projectName } = useParams();
  const projectDetails = projectList.find(
    (project) => projectName === project.project_slug
  );

  return (
    <div className="full_project_container">
      <div className="full_project_content">
        <div className="full_project_name">
          <p>{projectDetails.projectName}</p>
        </div>

        <div className="full_project_description">
          <span>{projectDetails.longDescription}</span>
        </div>

        <div className="full_project_features">
          <span>Features</span>
          {projectDetails.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </div>

        <div className="full_project_images">
          {projectDetails.imageUrl.map((url, index) => (
            <img key={index} src={url} alt={`datalens.live${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullProject;
