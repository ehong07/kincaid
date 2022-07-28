import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [handicap, setHandicap] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>You clicked {handicap} times</p>
          <button onClick={() => setHandicap(handicap + 1)}>
            Click me
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
