import React, { useState, useEffect } from 'react';

/**
 * MoodSelector component for selecting music based on mood
 * @param {Object} props - Component props
 * @param {Function} props.onMoodSelect - Function called when a mood is selected
 * @param {string} props.selectedMoodId - Currently selected mood ID 
 * @returns {JSX.Element} Mood selection UI
 */
const MoodSelector = ({ onMoodSelect, selectedMoodId }) => {
  const [activeMood, setActiveMood] = useState(selectedMoodId || null);
  
  // Update active mood when selectedMoodId prop changes
  useEffect(() => {
    if (selectedMoodId) {
      setActiveMood(selectedMoodId);
    }
  }, [selectedMoodId]);
  
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
    setActiveMood(mood.id);
    
    if (onMoodSelect) {
      onMoodSelect(mood);
    }
    
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
            className={`mood-tile ${activeMood === mood.id ? 'active' : ''}`}
            onClick={() => handleMoodClick(mood)}
            style={{
              borderColor: activeMood === mood.id ? 'var(--kavia-orange)' : 'transparent',
              backgroundColor: activeMood === mood.id ? 'rgba(232, 122, 65, 0.1)' : ''
            }}
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
