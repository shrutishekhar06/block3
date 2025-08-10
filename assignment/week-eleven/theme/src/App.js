import React, { useState, useEffect } from 'react';
import ThemedBox from './ThemedBox';

function ThemeApp() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>

      <ThemedBox theme={theme}>Box 1 content</ThemedBox>
      <ThemedBox theme={theme}>Box 2 content</ThemedBox>
      <ThemedBox theme={theme}>Box 3 content</ThemedBox>
    </div>
  );
}

export default ThemeApp;
