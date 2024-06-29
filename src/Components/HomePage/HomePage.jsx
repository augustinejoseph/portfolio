import "./HomePage.css";
import {
  Download,
  ProjectCard,
  SkillCard,
  ArticlesCard,
  fetchMediumArticles,
  RESUME_URL,
  EMAIL,
  PHONE,
  profilePicture,
} from "../../imports";
// import AWS from '../../Constants/SillIcons/aws.png'
import { skillList } from "../../SkillList/SkillList";
import { projectList } from "../../ProjectList/ProjectList";
import { useEffect, useState } from "react";
console.log('====================================');
console.log("projuect List", projectList);
console.log('====================================');
const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [author, setAuthor] = useState([]);


  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await fetchMediumArticles();
      setArticles(articles?.items);
      setAuthor(articles?.feed);
    };
    fetchArticles();
  }, []);

  return (
    <div className="homepage_container">
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
              developer.augustine@gmail.com
            </span>
            <span onClick={() => (window.location.href = `tel:${PHONE}`)}>
              +(91)-62380 83182
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
      </div>

      {/* projects */}
      <div className="homepage_skills_container">
        <div className="homepage_skills_title">
          <span>PROJECTS</span>
        </div>
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
            />
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="homepage_articles_container">
        <div className="homepage_skills_title">
          <span>ARTICLES</span>
        </div>
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
      </div>
      {/* <div className="homepage_profile_container">
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="augustinjoseph"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/augustinjoseph?trk=profile-badge"
        >
        </a>
      </div>
      </div> */}

    </div>
  );
};

export default HomePage;
