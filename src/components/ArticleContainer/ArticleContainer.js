import './ArticleContainer.css';
import ArticleCard from '../ArticleCard/ArticleCard';
import PropTypes from 'prop-types';

function ArticleContainer({ articles }){
    const displayCards = articles.map((article) => {
        return (
            <ArticleCard 
            id={article.id}
            title={article.title}
            media={article.media?.[0]?.url || ''}
            section={article.section}
            url={article.url}
            key={article.id}
            />
        )
    })

    return (
        <div className='articles-wrapper'>
            {displayCards}
        </div>
    )
}

ArticleContainer.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      multimedia: PropTypes.array.isRequired,
      section: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ArticleContainer;