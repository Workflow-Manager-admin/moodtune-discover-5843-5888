import React, { useState, useEffect, useRef } from 'react';

/**
 * SearchBar component for searching songs and artists
 * @param {Object} props - Component props
 * @param {Function} props.onSearch - Function called when search is submitted
 * @returns {JSX.Element} Search bar UI
 */
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  
  // Mock search data
  const mockMusicData = [
    { id: 1, title: 'Midnight Dreams', artist: 'Luna Echo', type: 'song' },
    { id: 2, title: 'Electric Summer', artist: 'Neon Wave', type: 'song' },
    { id: 3, title: 'Mountain Highs', artist: 'The Explorers', type: 'song' },
    { id: 4, title: 'Luna Echo', type: 'artist' },
    { id: 5, title: 'The Explorers', type: 'artist' },
    { id: 6, title: 'Neon Wave', type: 'artist' },
  ];
  
  // Filter results based on search query
  useEffect(() => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const filteredResults = mockMusicData.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      (item.artist && item.artist.toLowerCase().includes(query.toLowerCase()))
    ).slice(0, 5); // Limit to 5 results for dropdown
    
    setSearchResults(filteredResults);
  }, [query]);
  
  // Handle clicks outside of search component to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setShowResults(false);
    }
  };

  // Handle search result selection
  const handleResultClick = (result) => {
    setQuery(result.title);
    onSearch(result.title);
    setShowResults(false);
  };
  
  // Handle input focus
  const handleFocus = () => {
    if (query.trim() !== '') {
      setShowResults(true);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowResults(value.trim() !== '');
  };

  return (
    <div className="search-container" ref={searchRef}>
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
          onChange={handleInputChange}
          onFocus={handleFocus}
          aria-label="Search for songs or artists"
        />
      </form>
      
      {/* Dropdown search results */}
      {showResults && searchResults.length > 0 && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--card-background)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            marginTop: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 10,
            maxHeight: '300px',
            overflow: 'auto'
          }}
        >
          {searchResults.map(result => (
            <div
              key={result.id}
              onClick={() => handleResultClick(result)}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--hover-overlay)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div>
                <div style={{ fontWeight: 500 }}>{result.title}</div>
                {result.artist && (
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {result.artist}
                  </div>
                )}
              </div>
              <div style={{ 
                fontSize: '0.75rem', 
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                alignSelf: 'flex-start'
              }}>
                {result.type}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
