import "./SkillCard.css";

const SkillCard = (props) => {
  const { title, pictureUrl, description } = props;
  return (
    <div className="skillcard">
      <img src={pictureUrl} alt="skill" />
      
      <div className="skillcard__content">
        <p className="skillcard__title">{title}</p>
        <p className="skillcard__description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
