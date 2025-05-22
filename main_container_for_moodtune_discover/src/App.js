import React, { useState } from 'react';
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
  
  // Handle search submission
  const handleSearch = (query) => {
    setSearchQuery(query);
    // In a real implementation, this would trigger an API call
    console.log(`Searching for: ${query}`);
  };

  return (
    <ThemeProvider>
      <div className="app">
        {/* Navigation bar with logo, search, and theme toggle */}
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              {/* App Logo */}
              <div className="logo">
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
            <MoodSelector onMoodSelect={(mood) => {
              // This would trigger personalized recommendations in a real app
              console.log(`Selected mood: ${mood.label}`);
            }} />
            
            {/* Recommendation sections */}
            <RecommendationSection title="Based on Your Mood" />
            <RecommendationSection title="New Releases For You" />
            <RecommendationSection title="Because You Listened To..." />
            
            {/* Search results section - only shown when there is a search query */}
            {searchQuery && (
              <section className="recommendations-section">
                <div className="section-header">
                  <h2 className="section-title">Results for "{searchQuery}"</h2>
                </div>
                <div className="music-cards">
                  {/* This would be populated with real search results in a production app */}
                  <div className="music-card">
                    <div className="music-card-image" style={{ backgroundColor: 'hsl(180, 70%, 65%)' }}>♪</div>
                    <div className="music-card-content">
                      <h3 className="music-card-title">Search Result 1</h3>
                      <p className="music-card-artist">Artist Name</p>
                    </div>
                  </div>
                  <div className="music-card">
                    <div className="music-card-image" style={{ backgroundColor: 'hsl(220, 70%, 65%)' }}>♪</div>
                    <div className="music-card-content">
                      <h3 className="music-card-title">Search Result 2</h3>
                      <p className="music-card-artist">Another Artist</p>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;