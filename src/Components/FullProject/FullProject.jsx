import React from "react";
import "./FullProject.css";
import { useParams, projectList, ProjectCard } from "../../imports.jsx";

const FullProject = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };
  const { projectName } = useParams();

  const projectDetails = projectList.find(
    (project) => projectName === project.project_slug
  );
  const relatedProjects = projectList.filter(
    (projects) => projects.project_slug != projectName
  );
  return (
    <div className="full_project_container">
      <div className="full_project_content">
        <div className="full_project_name">
          <p>{projectDetails.projectName}</p>
        </div>

        <div className="full_project_links_container">
          {projectDetails.liveLink && (
            <button onClick={() => openLink(projectDetails.liveLink)}>
              Live Link
            </button>
          )}
          <button onClick={() => openLink(projectDetails.gitHubLink)}>
            Git Hub
          </button>
        </div>

        <div className="full_project_description">
          <span>{projectDetails.longDescription}</span>
        </div>

        <div className="full_project_stack_container">
          <span className="full_project_subtitle">Stacks used</span>
          <div className="full_project_stack">
            {projectDetails.technologyStacks.map((technologies, index) => (
              <span className="full_project_stack_list" key={index}>
                {technologies}
              </span>
            ))}
          </div>
        </div>

        <div className="full_project_features_container">
          <span className="full_project_subtitle">Features</span>
          <div className="full_project_features">
            {projectDetails.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </div>
        </div>

        <div className="full_project_images_container">
          <span className="full_project_subtitle">Images</span>
          <div className="full_project_images">
            {projectDetails.imageUrl.map((url, index) => (
              <img key={index} src={url} alt={`datalens.live${index}`} />
            ))}
          </div>
        </div>

        <div className="full_project_related">
          <span className="full_project_subtitle">Other Projects</span>
          <div className="full_project_projects">
            {relatedProjects.map((project) => (
              <ProjectCard
                key={project.imageUrl}
                imageUrl={project.imageUrl[0]}
                projectName={project.projectName}
                description={project.description}
                gitHubLink={project.gitHubLink}
                liveLink={project.liveLink}
                project_slug={project.project_slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProject;
