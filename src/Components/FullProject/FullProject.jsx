import "./FullProject.css";
import "../Loader/loader.css"
import { useParams, ProjectCard } from "../../imports.jsx";
import { useEffect, useState } from "react";
import { fetchProjectListFromSheet } from "../../imports";
import Papa from "papaparse";
import { isEmpty } from "../../utils.js";
import { sanitizeAndParseJSON } from "../HomePage/Functions.jsx";

const FullProject = () => {
  const [projectList, setProjectList] = useState([]);
  const [projectDetails, setProjectDetails] = useState(null); // Added state to hold project details
  const [loading, setLoading] = useState(true);  // Track loading state

  console.log("project list in state.......", projectList);
  console.log("selected project in state........", projectDetails);


  useEffect(() => {
    fetchAllProjects();
  }, []);

  const fetchAllProjects = async () => {
    try {
      // Fetch data from Project List
      const csvTextProject = await fetchProjectListFromSheet();

      // Parse the Project List CSV
      Papa.parse(csvTextProject, {
        complete: (result) => {
          console.log("Parsed Project List Data: ", result);
          // Parse the Project List data
          const projectData = result.data.slice(1);  // Get all rows excluding headers
          const projectMappedData = projectData.map(row => ({
            show: row[0],  // Assuming "show" column is the first column
            projectSlug: row[1],
            projectName: row[2],
            imageUrl: sanitizeAndParseJSON(row[3]),
            longDescription: row[4],
            description: row[5],
            gitHubLink: row[6],
            liveLink: row[7],
            liveLinkExpired: row[8],
            features: sanitizeAndParseJSON(row[9]),
            technologyStacks: sanitizeAndParseJSON(row[10]),
          }));

          console.log("Mapped Project List Data:", projectMappedData);
          setProjectList(projectMappedData);  // Set the project list in state
          setLoading(false);
          
        },
        header: false,  // Not using the first row as header
        skipEmptyLines: true,  // Skip any empty lines
      });

    } catch (error) {
      setLoading(false);

      console.error("Error fetching or parsing CSV:", error);
    }
  };

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const { projectName } = useParams();  // Get the projectSlug from URL

  useEffect(() => {
    // Find the project based on the URL parameter (projectSlug)
    const projectDetails = projectList.find(
      (project) => projectName === project.projectSlug
    );
    setProjectDetails(projectDetails);  // Set the project details if found
  }, [projectList, projectName]); // Re-run this effect whenever projectList or projectName changes

  // If projectDetails is null, return a loading message or some fallback
  if (projectDetails === null) {
    return <div>Loading project details...</div>;
  }

  const relatedProjects = projectList.filter(
    (projects) => projects.projectSlug !== projectName
  );



  return (
    <div className="full_project_container">
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
      <div className="full_project_content">
        {projectDetails && (
          <>
            <div className="full_project_name">
              <p>{projectDetails.projectName}</p>
            </div>

            <div className="full_project_links_container">
              {(projectDetails.liveLink && !projectDetails.liveLinkExpired) && (
                <button
                  disabled={projectDetails.liveLinkExpired}
                  onClick={() => openLink(projectDetails.liveLink)}
                >
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
                {projectDetails.imageUrl.sort().map((url, index) => (
                  <img key={index} src={`${url}`} alt={`project-${index}`} />

                ))}
              </div>
            </div>

            <div className="full_project_related_container">
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
                    project_slug={project.projectSlug}
                    liveLinkExpired={project?.liveLinkExpired}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FullProject;
