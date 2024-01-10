import React, { useCallback, useEffect, useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  
// eslint-disable-next-line
  const debouncedSearch = useCallback(
    debounce((value) => {
      onSearch(value);
    }, 300),
    [onSearch]
);

  // Effect to trigger the debounced search when the query changes
  useEffect(() => {
    if(query) {
      debouncedSearch(query);
    }
  }, [query, debouncedSearch]);

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  return (
    <div className='search-container'>
      <input className='search-input' type="text" placeholder='Search friends here..' value={query} onChange={handleInputChange} />
    </div>
  );
};

export default SearchBar;