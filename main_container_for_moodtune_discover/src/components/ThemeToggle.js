import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/**
 * ThemeToggle component for switching between light and dark themes
 * @returns {JSX.Element} Toggle switch UI
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const handleToggleChange = () => {
    toggleTheme();
    console.log(`Theme switched to: ${theme === 'dark' ? 'light' : 'dark'}`);
  };

  return (
    <div className="theme-toggle">
      <label className="toggle-switch" htmlFor="theme-switch">
        <input
          type="checkbox"
          id="theme-switch"
          checked={theme === 'light'}
          onChange={handleToggleChange}
          aria-label="Toggle theme"
        />
        <span className="toggle-slider">
          {/* Sun icon for light theme */}
          <span style={{ fontSize: '12px', marginLeft: '5px' }}>☀️</span>
          {/* Moon icon for dark theme */}
          <span style={{ fontSize: '12px', marginRight: '5px' }}>🌙</span>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
