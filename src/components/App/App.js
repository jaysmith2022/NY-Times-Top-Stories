import './App.css';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../../apicalls';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import { Header } from '../Header/Header';
import { Switch, Route } from 'react-router-dom';
import { ArticleDetails } from '../ArticleDetails/ArticleDetails';

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

  const getSingleArticle = (id) => {
    return articles.find((article) => {
      return article.id === parseInt(id)
    })
  }

  return (
    <main>
        <Header />
      <Switch>
        <Route exact path="/" className="App">
          <ArticleContainer articles={articles} />
        </Route>
        <Route
          exact
          path="/article/details/:id"
          render={({ match }) => {
            const singleArticle = getSingleArticle(match.params.id);
            return <ArticleDetails article={singleArticle} />;
          }}
        />
      </Switch>
    </main>
  );
}

export default App;
