import "./HomePage.css";
import "../Loader/loader.css"
import Papa from "papaparse"
import {
  Download,
  ProjectCard,
  SkillCard,
  ArticlesCard,
  fetchMediumArticles,
  fetchSkillListFromSheet,
  fetchProfileListFromSheet,
  fetchProjectListFromSheet,
  RESUME_URL,
  EMAIL,
  PHONE,
  profilePicture,
} from "../../imports";
import { skillList } from "../../SkillList/SkillList";
import { useEffect, useState } from "react";
import { sanitizeAndParseJSON } from "./Functions";
import { isEmpty } from "../../utils";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [author, setAuthor] = useState([]);
  const [skillList, setSkillList] = useState([])
  const [projectList, setProjectList] = useState([])
  const [loading, setLoading] = useState(true);

  console.log("project list in state.......", projectList);


  useEffect(() => {
    fetchDataFromGoogleSheet()
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const articles = await fetchMediumArticles();
    setArticles(articles?.items);
    setAuthor(articles?.feed);
  };

  const fetchDataFromGoogleSheet = async () => {
    try {
      // Fetch data from both Skill List and Project List
      const csvTextSkill = await fetchSkillListFromSheet();
      const csvTextProject = await fetchProjectListFromSheet();
      // Parse the Skill List CSV
      Papa.parse(csvTextSkill, {
        complete: (result) => {
          // Parse the Skill List data
          const skillHeaders = result.data[0];  // Assuming the first row contains headers
          const skillData = result.data.slice(1);  // Get all rows excluding headers
          const skillMappedData = skillData
            .filter(row => row[0] === 'TRUE')  // Assuming the 'show' column (index 0) contains 'TRUE' to filter visible skills
            .map(row => ({
              skillName: row[1],
              url: row[2],
              description: row[3],
            }));

          setSkillList(skillMappedData);  // Set the skill list in state
        },
        header: false,
        skipEmptyLines: true,
      });

      // Parse the Project List CSV
      Papa.parse(csvTextProject, {
        complete: (result) => {
          console.log("Parsed Project List Data: ", result);
          // Parse the Project List data
          const projectHeaders = result.data[0];
          const projectData = result.data.slice(1);
          const projectMappedData = projectData.map(row => ({
            show: row[0],
            project_slug: row[1],
            projectName: row[2],
            imageUrl: sanitizeAndParseJSON(row[3]),
            longDescription: row[4],
            description: row[5],
            gitHubLink: row[6],
            liveLink: row[7],
            liveLinkExpired: row[8],
            features: row[9],
            technologyStacks: row[10],
          }));

          setProjectList(projectMappedData);
          setLoading(false);
        },
        header: false,
        skipEmptyLines: true,
      });

    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="homepage_container">
      {/* {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )} */}
      <div className="homepage_hero_section_container">
        <div className="homepage_profile_picture">
          <img src={profilePicture} alt="portrait" />
        </div>
        <div className="homepage_title_container">
          <div className="homepage_title">
            <span>Augustine </span>
            <span>Joseph</span>
          </div>
          <div className="homepage_subheading">Full Stack Web Developer</div>
          <div className="homepage_description">
            <p>
              Hi... I am Augustine Joseph. I am a creative Full Stack Web
              Developer with experience in Python, Django, React, Javascript,
              AWS, GCP, Docker, Microservices and web hosting.{" "}
            </p>
          </div>
          <div className="homepage_description_contact_container">
            <span
              onClick={() =>
                (window.location.href = `mailto:${EMAIL}`)
              }
            >
              {EMAIL}
            </span>
            <span onClick={() => (window.location.href = `tel:${PHONE}`)}>
              {PHONE}
            </span>
          </div>
          <div className="homepage_downloadcv_button">
            <span onClick={() => window.open(RESUME_URL, "_blank")}>
              Download Resume <Download />{" "}
            </span>
          </div>
        </div>
      </div>

      {/* skills */}
      <div className="homepage_skills_section_container">
        <div className="homepage_skills_title">
          <span>SKILLS</span>
        </div>
        {!isEmpty(skillList) ? (
          <div className="homepage_skills">
            {skillList.map((sills) => (
              <SkillCard
                key={sills.skillName}
                title={sills.skillName}
                pictureUrl={sills.url}
                description={sills.description}
              />
            ))}
          </div>
        ) : (
          <div className="loader">
            <div className="spinner"></div>
          </div>

        )}
      </div>

      {/* projects */}
      <div className="homepage_skills_container">
        <div className="homepage_skills_title">
          <span>PROJECTS</span>
        </div>
        {!isEmpty(projectList) ? (
          <div className="homepage_projects">
            {projectList.map((project) => (
              <ProjectCard
                key={project.imageUrl}
                imageUrl={project.imageUrl[0]}
                projectName={project.projectName}
                description={project.description}
                gitHubLink={project.gitHubLink}
                liveLink={project.liveLink}
                project_slug={project.project_slug}
                liveLinkExpired={project?.liveLinkExpired}
              />
            ))}
          </div>
        ) : (
          <div className="loader">
            <div className="spinner"></div>
          </div>

        )}
      </div>

      {/* Articles */}
      <div className="homepage_articles_container">
        <div className="homepage_skills_title">
          <span>ARTICLES</span>
        </div>
        {!isEmpty(projectList) ? (

          <div className="homepage_articles_wrapper">
            <div className="homepage_articles">
              {articles?.map((article) => (


                <ArticlesCard
                  key={article.pubDate}
                  title={article.title}
                  link={article.link}
                  pubDate={article.pubDate}
                  imageUrl={(article['description']).toString().match(/<img[^>]+src="([^">]+)"/)[1]}
                  description={article.content}
                  categories={article.categories}
                  author={article.author}
                  profilePicture={author.image}
                  profileUrl={author.link}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="loader">
            <div className="spinner"></div>
          </div>

        )}
      </div>

    </div >
  );
};

export default HomePage;
