import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div className="App">
      <CohortDetails name="React Fundamentals" status="ongoing" mentor="Alice" />
      <CohortDetails name="Spring Boot" status="completed" mentor="Bob" />
    </div>
  );
}

export default App;
