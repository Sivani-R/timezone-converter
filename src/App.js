import React from 'react';
import TimezoneConverter from './components/TimezoneConverter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Timezone Converter Tool</h1>
      </header>
      <main className='background-img'>
        <TimezoneConverter />
      </main>
    </div>
  );
}

export default App;
