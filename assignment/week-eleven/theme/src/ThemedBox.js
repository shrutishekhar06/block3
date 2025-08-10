import React from 'react';

function ThemedBox({ theme, children }) {
  const styles = {
    light: {
      backgroundColor: '#f0f0f0',
      color: '#000',
      padding: '20px',
      margin: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
    dark: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      margin: '10px',
      borderRadius: '8px',
      border: '1px solid #444',
    },
  };

  return <div style={theme === 'dark' ? styles.dark : styles.light}>{children}</div>;
}

export default ThemedBox;
