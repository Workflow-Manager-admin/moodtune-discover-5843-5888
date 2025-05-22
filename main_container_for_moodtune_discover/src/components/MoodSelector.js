import React from 'react';

/**
 * MoodSelector component for selecting music based on mood
 * @param {Object} props - Component props
 * @param {Function} props.onMoodSelect - Function called when a mood is selected
 * @returns {JSX.Element} Mood selection UI
 */
const MoodSelector = ({ onMoodSelect }) => {
  // Placeholder moods
  const moods = [
    { id: 'happy', label: 'Happy', icon: '😊' },
    { id: 'chill', label: 'Chill', icon: '😌' },
    { id: 'energetic', label: 'Energetic', icon: '⚡' },
    { id: 'focus', label: 'Focus', icon: '🧠' },
    { id: 'melancholy', label: 'Melancholy', icon: '🥺' },
    { id: 'romantic', label: 'Romantic', icon: '💖' },
  ];

  // Handle mood selection
  const handleMoodClick = (mood) => {
    if (onMoodSelect) {
      onMoodSelect(mood);
    }
    // This is a placeholder. In a real app, this would trigger an API call
    console.log(`Mood selected: ${mood.label}`);
  };

  return (
    <section className="mood-section">
      <div className="section-header">
        <h2 className="section-title">How are you feeling today?</h2>
      </div>
      <div className="mood-tiles">
        {moods.map((mood) => (
          <div 
            key={mood.id} 
            className="mood-tile" 
            onClick={() => handleMoodClick(mood)}
          >
            <div className="mood-icon">{mood.icon}</div>
            <div className="mood-label">{mood.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoodSelector;
