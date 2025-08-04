import React from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  const flag = true; // Toggle this to see conditional rendering

  return (
    <div className="App">
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
