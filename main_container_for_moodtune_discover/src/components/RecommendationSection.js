import React, { useState } from 'react';

/**
 * RecommendationSection component for displaying music recommendations
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {Array} props.items - Array of music items to display (placeholder)
 * @param {string} props.mood - Selected mood for filtering recommendations
 * @returns {JSX.Element} Music recommendation section UI
 */
const RecommendationSection = ({ title, items = [], mood = null }) => {
  const [expanded, setExpanded] = useState(false);
  
  // This is a placeholder component that would typically fetch real data
  // For now, we'll use dummy data if no items are provided
  const allItems = items.length > 0 ? items : [
    { id: 1, title: 'Midnight Dreams', artist: 'Luna Echo', cover: '', moods: ['chill', 'melancholy'] },
    { id: 2, title: 'Electric Summer', artist: 'Neon Wave', cover: '', moods: ['energetic', 'happy'] },
    { id: 3, title: 'Mountain Highs', artist: 'The Explorers', cover: '', moods: ['focus', 'chill'] },
    { id: 4, title: 'Urban Melodies', artist: 'City Sound', cover: '', moods: ['focus', 'melancholy'] },
    { id: 5, title: 'Ocean Blue', artist: 'Coastal Tides', cover: '', moods: ['chill', 'romantic'] },
    { id: 6, title: 'Dancing Lights', artist: 'Neon Wave', cover: '', moods: ['energetic', 'happy'] },
    { id: 7, title: 'Heartfelt', artist: 'Luna Echo', cover: '', moods: ['romantic', 'melancholy'] },
    { id: 8, title: 'Sunrise', artist: 'The Explorers', cover: '', moods: ['happy', 'energetic'] },
  ];
  
  // Filter items based on mood if provided
  const filteredItems = mood ? 
    allItems.filter(item => item.moods && item.moods.includes(mood)) : 
    allItems;
  
  // Display either all items or just 5 based on expanded state
  const displayItems = expanded ? filteredItems : filteredItems.slice(0, 5);
  
  const handleSeeAllClick = () => {
    setExpanded(!expanded);
    console.log(`${expanded ? 'Collapsing' : 'Expanding'} ${title} section`);
    // This would navigate to a dedicated page in a real app
  };
  
  const handleCardClick = (item) => {
    console.log(`Selected track: ${item.title} by ${item.artist}`);
    // This would open a detailed view or play the track in a real app
  };

  return (
    <section className="recommendations-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <button className="see-all" onClick={handleSeeAllClick}>
          {expanded ? 'Show Less' : 'See All'}
        </button>
      </div>
      <div className="music-cards">
        {displayItems.map(item => (
          <div key={item.id} className="music-card" onClick={() => handleCardClick(item)}>
            {/* Placeholder for album/song cover art */}
            <div 
              className="music-card-image" 
              style={{ 
                backgroundColor: `hsl(${item.id * 45}, 70%, 65%)`,
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
        ))}
      </div>
      {filteredItems.length === 0 && mood && (
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '20px 0' }}>
          No recommendations found for this mood. Try selecting a different mood.
        </p>
      )}
    </section>
  );
};

export default RecommendationSection;
