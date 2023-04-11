import './App.css';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../../apicalls';
import ArticleContainer from '../ArticleContainer/ArticleContainer';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => {
      const newArticles = data.results.map((info, index) => ({
        ...info,
        id: index
      }));
      setArticles(newArticles);
    });
  }, []);

  return (
    <div className="App">
      <ArticleContainer articles={articles} />
    </div>
  );
}

export default App;
