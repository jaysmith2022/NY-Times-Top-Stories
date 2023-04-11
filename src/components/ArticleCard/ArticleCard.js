import './ArticleCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ArticleCard({ id, title, media, section, url }) {
  return (
    <div className="article-card">
      <h2>{title}</h2>
      {media && <img src={media} alt={`${title} image`} />}
      <p>{section}</p>
      <div className="article-buttons">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button>Go to Article</button>
        </a>
        <Link to={`/article/details/${id}`}>
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  media: PropTypes.string,
  section: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ArticleCard;