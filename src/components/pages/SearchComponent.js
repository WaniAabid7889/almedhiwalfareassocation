import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchComponent() {
  const location = useLocation();
  console.log(location);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');
  
  return (
    <div style={searchContainerStyle}>
      <h1>Search Results</h1>
      <p>Your search query: <strong>{query}</strong></p>
    </div>
  );
}

const searchContainerStyle = {
  padding: '20px',
  fontSize: '1.2em',
};
