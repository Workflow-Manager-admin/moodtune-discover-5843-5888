import React from 'react';

/**
 * RecommendationSection component for displaying music recommendations
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {Array} props.items - Array of music items to display (placeholder)
 * @returns {JSX.Element} Music recommendation section UI
 */
const RecommendationSection = ({ title, items = [] }) => {
  // This is a placeholder component that would typically fetch real data
  // For now, we'll use dummy data if no items are provided
  const placeholderItems = items.length > 0 ? items : [
    { id: 1, title: 'Midnight Dreams', artist: 'Luna Echo', cover: '' },
    { id: 2, title: 'Electric Summer', artist: 'Neon Wave', cover: '' },
    { id: 3, title: 'Mountain Highs', artist: 'The Explorers', cover: '' },
    { id: 4, title: 'Urban Melodies', artist: 'City Sound', cover: '' },
    { id: 5, title: 'Ocean Blue', artist: 'Coastal Tides', cover: '' },
  ];

  return (
    <section className="recommendations-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <a href="#" className="see-all">See All</a>
      </div>
      <div className="music-cards">
        {placeholderItems.map(item => (
          <div key={item.id} className="music-card">
            {/* Placeholder for album/song cover art */}
            <div 
              className="music-card-image" 
              style={{ 
                backgroundColor: `hsl(${item.id * 45}, 70%, 65%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px'
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
    </section>
  );
};

export default RecommendationSection;
