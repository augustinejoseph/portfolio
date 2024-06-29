import "./ProjectCard.css";
import { useNavigate } from "../../imports";

const Projectprojectcard = (props) => {
  const navigate = useNavigate();
  const handelLinkClick = (liveLink) => {
    window.open(liveLink, "_blank");
  };
  const {project_slug, imageUrl, projectName, description, gitHubLink, liveLink  } = props;
  console.log('imageUrl',imageUrl);
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
          <button
            onClick={() => navigate(`/project/${project_slug}`)}
            className="projectcard__button secondary"
          >
            View More
          </button>
        </div>
        
      </div>
      {/* <div className="projectcard_mobileonly_button_container">
      <button className="projectcard_viewmore_button_mobile_only">
          View More
        </button>
      </div> */}
    </div>
  );
};

export default Projectprojectcard;
