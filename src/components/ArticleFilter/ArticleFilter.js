import { useState } from 'react';

export const ArticleFilter = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    props.onSearch(newSearchTerm);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};
