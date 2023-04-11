import { Link } from "react-router-dom";



export const ArticleDetails = ({ article }) => {
    if (!article) {
      return <div>Loading...</div>;
    }

    return (
      <article className="details-page-container">
        <h3 className="detail-title">{article.title}</h3>
        <p className="detail-byline">{article.byline}</p>
        <div className="detail-image-container">
            <Link className="back-home-container" style={{textDecoration:"none"}}  to="/">
                <button className="back-home">Back to Home</button>
            </Link>
            <img 
                className="detail-image" 
                src={
                    article.multimedia.find((media) => media.type === 'image')?.url ||
                    article.multimedia[0]?.url ||
                    article.multimedia[1]?.url ||
                    article.multimedia[2]?.url ||
                    ''
                }
                alt={`${article.title} image`} 
            />
        </div>
            <p className="article-abstract">{article.abstract}</p>
            <a className="article-link" href={article.url} target="_blank" rel="noopener noreferrer">
            Link to Article
            </a>
      </article>
    );
  };