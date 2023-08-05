import "./ProjectCard.css";

const Projectprojectcard = (props) => {
  const handelLinkClick = (liveLink) => {
    window.open(liveLink, "_blank");
  };
  const { imageUrl, projectName, description, gitHubLink, liveLink } = props;
  return (
    <div className="projectprojectcard_container">
      <div className="projectcard">
        <img className="projectcard_image" src={imageUrl} alt="" />
        <div className="projectcard__content">
          <p className="projectcard__title">{projectName}</p>
          <p className="projectcard__description">{description}</p>
          {liveLink && (
            <button
              onClick={() => handelLinkClick(liveLink)}
              className="projectcard__button"
            >
              Live Demo
            </button>
          )}
          {gitHubLink && (
            <button
              onClick={() => handelLinkClick(gitHubLink)}
              className="projectcard__button secondary"
            >
              Source Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projectprojectcard;
