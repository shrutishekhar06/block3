import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', padding: 10 }}>
      <h1>User Profiles</h1>
      <input
        type="text"
        placeholder="Search users by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 20 }}
      />
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
