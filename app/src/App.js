import React, { useState } from 'react';
import { AppBar } from '@mui/material';

import logo from './logo.svg';
import './App.css';

function App() {
  const [handicap, setHandicap] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="static" />
      </header>
      <body className="App-body">
        <div>
          <p>You clicked {handicap} times</p>
          <button onClick={() => setHandicap(handicap + 1)}>
            Click me
          </button>
        </div>
      </body>
    </div>
  );
}

export default App;
