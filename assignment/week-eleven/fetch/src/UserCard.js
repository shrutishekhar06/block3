import React from 'react';

export default function UserCard({ name, email, city }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: 6,
      padding: 15,
      marginBottom: 15,
      boxShadow: '1px 1px 3px #aaa'
    }}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>
  );
}
