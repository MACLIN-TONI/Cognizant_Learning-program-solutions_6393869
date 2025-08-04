import React from 'react';

function IndianPlayers() {
  const T20 = ['Virat', 'Rohit', 'KL Rahul'];
  const Ranji = ['Pujara', 'Rahane', 'Iyer'];

  const allPlayers = [...T20, ...Ranji]; // Merge arrays

  const [first, second, ...rest] = allPlayers; // Destructuring

  return (
    <div>
      <h2>Indian Players</h2>
      <p><strong>First:</strong> {first}</p>
      <p><strong>Second:</strong> {second}</p>
      <p><strong>Others:</strong> {rest.join(', ')}</p>
    </div>
  );
}

export default IndianPlayers;
