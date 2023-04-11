import './App.css';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../../apicalls';

function App() {
const [articles, setArticles] = useState([])

useEffect(() => {
  fetchArticles()
  .then((data) => {
    const newArticles = data.results.map((info, index) => ({
      ...info, 
      id: index
    }))
    setArticles(newArticles)
  })
})



  return (
    <div className="App">
    </div>
  );
}

export default App;
