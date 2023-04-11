import './ArticleCard.css'
import { Link } from 'react-router-dom'


function ArticleCard({ id, title, media, section, url }) {
    return (
        <div>
            <h2>{title}</h2>
            <img 
            src={media}
            alt={`${title} image`}
            />
            <p>{section}</p>
            <a href={url} target="_blank" rel='noopener noreferrer'>
                <button>Go to Article</button>
            </a>
            <Link to={`/article/details/${id}`}>
                <button>Learn More</button>
            </Link>
        </div>
    )
}