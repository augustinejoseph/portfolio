import "./ArticlesCard.css";
import { truncateTitle, stripTags } from "./Functions";
import { isEmpty } from "../../utils";
const ArticlesCard = (props) => {
  const handleArticleClick = (url) => {
    window.open(url, "_blank");
  };
  const {
    title,
    profileUrl,
    profilePicture,
    link,
    pubDate,
    imageUrl,
    description,
    categories,
    author,
  } = props;

  const cleanedDescription = stripTags(description);
  const truncatedTitle = truncateTitle(title);
  return (
    <div>
      <div className="articles_container">
        <div
        onClick={() => handleArticleClick(link)}
         className="articles_card">
          <div className="articles_card__header">
            <img
              src={imageUrl}
              alt="articles_card__image"
              className="articles_card__image"
              width="600"
            />
          </div>
          <div className="articles_card__categories">
            {!isEmpty(categories) ? (
              categories.map((item) => (
                <span className="tag tag-blue">{item}</span>
              ))
            ) : (
              <span />
            )}
            <h4
              className="articles_card_title"
              onClick={() => handleArticleClick(link)}
            >
              {truncatedTitle}
            </h4>
            <p>{cleanedDescription}</p>
          </div>
          <div className="articles_card__footer">
            <div
              onClick={() => handleArticleClick(profileUrl)}
              className="articles_user"
            >
              <img
                src={profilePicture}
                alt="articles_user__image"
                className="articles_user__image"
              />
              <div className="articles_user__info">
                <h5>{author}</h5>
                <small>{pubDate}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
