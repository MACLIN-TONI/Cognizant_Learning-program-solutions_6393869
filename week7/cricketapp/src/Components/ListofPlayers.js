import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 92 },
    { name: 'Dhawan', score: 65 },
    { name: 'KL Rahul', score: 40 },
    { name: 'Hardik', score: 78 },
    { name: 'Jadeja', score: 55 },
    { name: 'Ashwin', score: 34 },
    { name: 'Bumrah', score: 68 },
    { name: 'Shami', score: 90 },
    { name: 'Pant', score: 74 },
    { name: 'Gill', score: 80 }
  ];

  const highScorers = players.filter(p => p.score >= 70);

  return (
    <div>
      <h2>High Scoring Players (score ≥ 70)</h2>
      <ul>
        {highScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
