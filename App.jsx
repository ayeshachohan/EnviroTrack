import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <button className="header-button">Visualize Dataset</button>
        <button className="header-button">FAQ</button>
        <button className="header-button">About</button>
      </header>
      <main className="app-main">
        <div className="card">
          <img src="/Users/Dekll/Desktop/EnviroTrack/education.png" alt="Education" />
          <h3>Access Educational Material</h3>
        </div>
        <div className="card">
          <img src="/Users/Dekll/Desktop/EnviroTrack/collaboration.png" alt="Collaboration" />
          <h3>Collaborate with peers</h3>
        </div>
        <div className="card">
          <img src="/Users/Dekll/Desktop/EnviroTrack/collaboration.png" alt="Discussion" />
          <h3>Engage in Discussion</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
