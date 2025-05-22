import React, { useState } from 'react';

/**
 * SearchBar component for searching songs and artists
 * @param {Object} props - Component props
 * @param {Function} props.onSearch - Function called when search is submitted
 * @returns {JSX.Element} Search bar UI
 */
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <span className="search-icon">
          {/* Search icon - can be replaced with an actual icon library in the future */}
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 6.5a4 4 0 11-8 0 4 4 0 018 0zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
              fill="currentColor"
            />
          </svg>
        </span>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for songs or artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search for songs or artists"
        />
      </form>
    </div>
  );
};

export default SearchBar;
