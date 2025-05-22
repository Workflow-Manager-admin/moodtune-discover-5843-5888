import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import RecommendationSection from './components/RecommendationSection';
import MoodSelector from './components/MoodSelector';

/**
 * Main App component for MoodTune Discover
 * @returns {JSX.Element} Main application container
 */
function App() {
  // State for search results - would connect to API in a real implementation
  const [searchQuery, setSearchQuery] = useState('');
  // State for selected mood
  const [selectedMood, setSelectedMood] = useState(null);
  // State for search results
  const [searchResults, setSearchResults] = useState([]);
  
  // Mock data for search results
  const mockSearchData = [
    { id: 101, title: 'Midnight Serenade', artist: 'Luna Echo', cover: '', moods: ['chill', 'melancholy'] },
    { id: 102, title: 'Electric Dreams', artist: 'Neon Wave', cover: '', moods: ['energetic', 'happy'] },
    { id: 103, title: 'Mountain Echo', artist: 'The Explorers', cover: '', moods: ['focus', 'chill'] },
    { id: 104, title: 'Cityscape', artist: 'City Sound', cover: '', moods: ['focus', 'energetic'] },
    { id: 105, title: 'Oceanic Feelings', artist: 'Coastal Tides', cover: '', moods: ['chill', 'romantic'] },
  ];

  // Generate search results when search query changes
  useEffect(() => {
    if (searchQuery) {
      // In a real app, this would be an API call
      const results = mockSearchData.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  
  // Handle search submission
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(`Searching for: ${query}`);
  };
  
  // Handle mood selection
  const handleMoodSelect = (mood) => {
    setSelectedMood(prev => prev?.id === mood.id ? null : mood);
    console.log(`Selected mood: ${mood.label}`);
  };
  
  // Clear search results
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <ThemeProvider>
      <div className="app">
        {/* Navigation bar with logo, search, and theme toggle */}
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              {/* App Logo - clicking logo clears filters */}
              <div 
                className="logo" 
                onClick={clearSearch} 
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex="0"
                aria-label="MoodTune logo, click to clear filters"
              >
                <span className="logo-symbol">♫</span> MoodTune
              </div>
              
              {/* Search and Theme Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <SearchBar onSearch={handleSearch} />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        {/* Main content area */}
        <main className="main-content">
          <div className="container">
            {/* Personalized welcome section */}
            <div className="hero">
              <h1 className="title">Discover Your Sound</h1>
              <div className="description">
                Personalized music recommendations based on your mood and taste.
                Explore new artists, genres, and songs tailored just for you.
              </div>
            </div>
            
            {/* Mood selector section */}
            <MoodSelector 
              onMoodSelect={handleMoodSelect} 
              selectedMoodId={selectedMood?.id} 
            />
            
            {/* Search results section - shown when there is a search query */}
            {searchQuery && (
              <section className="recommendations-section">
                <div className="section-header">
                  <h2 className="section-title">Results for "{searchQuery}"</h2>
                  <button className="see-all" onClick={clearSearch}>Clear Search</button>
                </div>
                <div className="music-cards">
                  {searchResults.length > 0 ? (
                    searchResults.map(item => (
                      <div key={item.id} className="music-card" onClick={() => console.log(`Selected: ${item.title}`)}>
                        <div 
                          className="music-card-image" 
                          style={{ 
                            backgroundColor: `hsl(${item.id * 20}, 70%, 65%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '24px',
                            cursor: 'pointer'
                          }}
                        >
                          ♪
                        </div>
                        <div className="music-card-content">
                          <h3 className="music-card-title">{item.title}</h3>
                          <p className="music-card-artist">{item.artist}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p style={{ 
                      gridColumn: '1 / -1', 
                      textAlign: 'center',
                      color: 'var(--text-secondary)',
                      padding: '20px 0'
                    }}>
                      No results found for "{searchQuery}"
                    </p>
                  )}
                </div>
              </section>
            )}
            
            {/* Recommendation sections - only shown when not searching */}
            {!searchQuery && (
              <>
                <RecommendationSection 
                  title="Based on Your Mood" 
                  mood={selectedMood?.id}
                />
                <RecommendationSection 
                  title="New Releases For You" 
                  mood={selectedMood?.id}
                />
                <RecommendationSection 
                  title="Because You Listened To..." 
                  mood={selectedMood?.id}
                />
              </>
            )}
          </div>
        </main>
        
        {/* Footer with information */}
        <footer style={{ 
          padding: '20px 0', 
          textAlign: 'center',
          borderTop: '1px solid var(--border-color)',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          marginTop: '40px'
        }}>
          <div className="container">
            <p>MoodTune Discover • Find the perfect soundtrack for every moment</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;