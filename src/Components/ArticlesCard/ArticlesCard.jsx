import "./ArticlesCard.css";
import {truncateTitle,stripTags} from './Functions'

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
        <div className="articles_card">
          <div className="articles_card__header">
            <img
              src={imageUrl}
              alt="articles_card__image"
              className="articles_card__image"
              width="600"
            />
          </div>
          <div className="articles_card__body">
            <span className="tag tag-blue">{categories[0]}</span>
            <h4 onClick={() => handleArticleClick(link)}>{truncatedTitle}</h4>
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
