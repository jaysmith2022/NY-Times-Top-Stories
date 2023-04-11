import './App.css';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../../apicalls';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import { Header } from '../Header/Header';

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
    <main>
      <Header />
      <div className="App">
        <ArticleContainer articles={articles} />
      </div>
    </main>
  );
}

export default App;
